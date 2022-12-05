import s from "../styles/main.module.css";
import LinkComp from "./LinkComp";

const MainContainer = ({children}) => {
    return (
        <>
            <div className={s.navbar}>
                <div>
                    <LinkComp href='/' text='Main'/>
                    <LinkComp href='/users' text='Users'/>
                    <LinkComp href='/posts' text='Posts'/>
                </div>
            </div>
            {children}
        </>
    );
};

export default MainContainer;