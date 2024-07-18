import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import CoverPageComponent from '../../components/CoverPageComponent/coverPageComponent'
import { usePopUp } from '../../functions/PopUpContext'
export default function Page({ children }) {
    const { popUpData } = usePopUp();
    return (
        <>
            <Header />
            <main >
                {children}
            </main>
            <Footer />
            {popUpData?.isVisible && <CoverPageComponent closeByClick={popUpData.closeByClick} Component={popUpData.element} />}
        </>
    )
}
