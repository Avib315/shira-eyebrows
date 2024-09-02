import { Form, TreeSelect } from 'antd';
import './inputAddress.scss';
import Input from 'antd/es/input/Input';
import { useState, useEffect } from 'react';
import { axiosReq } from '../../functions/useAxiosReq';
function InputAddress({ setValue = ()=>{} }) {
    const baseURL = "https://data.gov.il/api/3/action/"
    const [cities, setCities] = useState([]);
    const [streets, setStreets] = useState([]);
    const [cityValue, setCityValue] = useState(null);

    const getCitiesFromApiService = async () => {
        const { result } = await axiosReq({
            method: "GET",
            baseURLArg:baseURL,
            url: "datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1200",
        });
        const selectFormat = result?.records?.map((c) => ({ value: c["שם_ישוב"], title: c["שם_ישוב"] }));
        setCities(selectFormat || []);

    };

    const handleCityChange = async (value) => {
        setCityValue(value);
        setStreets([]);
        setValue("city", value);
        const { result } = await axiosReq({
            method: "GET",
            baseURLArg:baseURL,
            url: `datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&q=${encodeURIComponent(value)}`,
        });
        const streetOptions = result?.records?.map((s) => ({ value: s["שם_רחוב"], title: s["שם_רחוב"] }));
        setStreets(streetOptions || []);

    };

    const handleStreetChange = (value) => {
        setValue("street", value);
    };

    useEffect(() => {
        getCitiesFromApiService();
    }, []);

    return (
        <>
            <label className='selectData'>
                <span className='spanLabel'>עיר</span>
                <Form.Item
                    name={"city"}
                    rules={[{ required: true, message: `נא הכנס עיר` }]}
                >
                    <TreeSelect
                        showSearch
                        style={{ width: '100%' , height: '100%' }}
                        value={cityValue || undefined}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder="בחר עיר"
                        treeDefaultExpandAll
                        onChange={handleCityChange}
                        treeData={cities}
                    />
                </Form.Item>
            </label>
                <label className='smallSelectData'>
                    <span className='spanLabel'>רחוב</span>
                    <Form.Item
                        name={"street"}
                        rules={[{ required: true, message: `נא הכנס רחוב` }]}
                    >
                        <TreeSelect
                            showSearch
                            style={{ width: '100%' }}
                            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                            placeholder="בחר רחוב"
                            treeDefaultExpandAll
                            onChange={handleStreetChange}
                            treeData={streets}
                            disabled={!cityValue}
                        />
                    </Form.Item>
                </label>
                <label className='smallSelectData'>
                    <span className='spanLabel'>מספר בית</span>
                    <Form.Item
                        name={"houseNumber"}
                        rules={[{ required: true, message: `נא הכנס מס בית` }]}
                    >
                        <Input
                            name="houseNumber"
                            onChange={(e) => setValue("houseNumber", e.target.value)}
                        />
                    </Form.Item>
                </label>
        </>
    );
}

export default InputAddress;
