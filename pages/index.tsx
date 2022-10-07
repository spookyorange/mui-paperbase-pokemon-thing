import type {NextPage} from 'next'
import Header from './paperbase/Header'
import Content from "./paperbase/Content";
import Paperbase from "./paperbase/Paperbase";

const Home: NextPage = () => {
    return (
        <div>
            <Paperbase/>
        </div>
    )
}

export default Home
