import './adminImagesContainer.scss'
import { FaTrash } from "react-icons/fa";
export default function AdminImagesContainer({ images, deleteFunction }) {
    const images1 = [{src:"https://st3.depositphotos.com/1441511/14759/i/380/depositphotos_147593521-stock-photo-beautician-doing-permanent-eyebrows-makeup.jpg" , alt:"233"},
        { alt: "7", src: "//www.anastasiabeverlyhills.com/cdn/shop/files/ABH_TheStudio_Blog_052724_Lock-In-Your-Look_Export_02.jpg?v=1715898357&width=300 300w, //www.anastasiabeverlyhills.com/cdn/shop/files/ABH_TheStudio_Blog_052724_Lock-In-Your-Look_Export_02.jpg?v=1715898357&width=600 600w, //www.anastasiabeverlyhills.com/cdn/shop/files/ABH_TheStudio_Blog_052724_Lock-In-Your-Look_Export_02.jpg?v=1715898357&width=750 750w, //www.anastasiabeverlyhills.com/cdn/shop/files/ABH_TheStudio_Blog_052724_Lock-In-Your-Look_Export_02.jpg?v=1715898357&width=1024 1024w, //www.anastasiabeverlyhills.com/cdn/shop/files/ABH_TheStudio_Blog_052724_Lock-In-Your-Look_Export_02.jpg?v=1715898357&width=1280 1280w, //www.anastasiabeverlyhills.com/cdn/shop/files/ABH_TheStudio_Blog_052724_Lock-In-Your-Look_Export_02.jpg?v=1715898357&width=1440 1440w, //www.anastasiabeverlyhills.com/cdn/shop/files/ABH_TheStudio_Blog_052724_Lock-In-Your-Look_Export_02.jpg?v=1715898357&width=1920 1920w" }, { alt: "1", src: "https://img.freepik.com/premium-photo/makeup-brushes-cosmetics-grey-background_392895-147924.jpg" }, { alt: "2", src: "https://img.freepik.com/free-photo/portrait-young-beautiful-model-stand-smiling-camera-high-quality-photo_144627-75055.jpg?ga=GA1.1.1744414765.1655714439&semt=sph" }, {alt:"99" ,src:"https://st.depositphotos.com/1053646/2276/i/380/depositphotos_22763114-stock-photo-abstract-green-eye.jpg" },
      ]
    return (
        <div className='AdminImagesContainer'>
            {images1.map((image, i) => (
                <div className='btnAndImgContainer'>
                    <img src={image.src} key={image?.id + image.alt} />
               
                <button><FaTrash/></button>
              
                </div>
            ))}
        </div>
    )
}
