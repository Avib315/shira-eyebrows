import axios from 'axios';
import { create } from 'zustand';
import EditorPopUp from '../components/EditorPopUp/editorPopUp';
import usePopUpStore from '../../functions/usePopUpStore';

const usePopUpEditor = create((set, get) => ({
    openEditor: (title = "הוספת מוצר", formArray = [], submitHandler = ()=>{} ) => {
        const { showPopUp, setPopValue } = usePopUpStore.getState();
        const editor = () => (
            <EditorPopUp title={title} formArray={formArray} submitHandler={submitHandler} />
        );
        setPopValue(editor);
        showPopUp(false);
    }
}));

export default usePopUpEditor;
