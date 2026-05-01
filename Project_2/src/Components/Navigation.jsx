import styles from "./Navigation.module.css";
function Navigation(){
    return(
        <>
        <nav className={`${styles.navigation} container`}>
            <div>
                <img src="/Images/Frame.png" alt="" />
            </div>
                <ul className={styles.ul}>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>


        </nav>

        </>
    )
}

export default Navigation;