import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import NotFound from '../components/empty UI state/NotFound';
import styles from '../css/pages/404Page.module.css'

const NotFoundPage = () => {
    return (
        <>
        <Header />
        <section className={styles.container}>
            <NotFound />
        </section>
        <Footer />
        </>
    )
}

export default NotFoundPage;