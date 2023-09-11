import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./MainRouster/MainRouster";
const App = () => {

    return (
        <div>
            <RouterProvider
                router={MainRouter} />
        </div>
    )
}
export default App;