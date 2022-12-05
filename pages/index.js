import s from '../styles/main.module.css'
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
        <MainContainer>
            <h1 className={s.textHead}>Main page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, libero.</p>
        </MainContainer>
    );
};

export default Index;