import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import CoverPageComponent from '../../components/CoverPageComponent/coverPageComponent'
import usePopUpStore  from '../../functions/usePopUpStore'
export default function Page({ children }) {
    const { popUpData } = usePopUpStore();
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
