import { IParams } from "../Interfaces/IParams";
import { IContent, IText } from "../Interfaces/IText";
import Banner from "./Banner";
import Menu from "./Menu";

function Home(props: { params: IParams, text: IText }) {
    return (
        <> 
            {props.params.BANNER ? <Banner banner={props.text.BANNER} /> : ''}
            <Menu content={props.text.CONTENT as Array<IContent>}/>
        </>
    );
}

export default Home;