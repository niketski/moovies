import styles from './InnerPage.module.css';

const InnerPage = props => {
    return (
        <div className={styles.InnerPage}>
            <div className={styles.InnerPageWrapper}>
                <div className="container">
                    <h1 className={styles.InnerPageTitle}>{props.title}</h1>
                    <div className="InnterPageContent">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerPage;