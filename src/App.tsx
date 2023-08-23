import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Modal } from "./components/Modal";
import PageBlanks from "./pages/Blanks";
import PageBlanksItem from "./pages/BlanksItem";
import PageProjects from "./pages/Projects";
import PageEdit from "./pages/Edit";
import PageGallery from "./pages/Background/Gallery";
import PageBackgroundEdit from "./pages/Background";
import { PagePallete } from "./shared/Pallete";
import { PageDefaultProfile } from "./pages/Profile";

function App() {
    return (
        <>
            <Home />
            <Routes>
                <Route path="/" element={<></>} />
                <Route
                    path="blanks"
                    element={
                        <Modal>
                            <PageBlanks />
                        </Modal>
                    }
                />
                <Route
                    path="blanks/:id"
                    element={
                        <Modal>
                            <PageBlanksItem />
                        </Modal>
                    }
                />
                <Route
                    path="list"
                    element={
                        <Modal>
                            <PageProjects />
                        </Modal>
                    }
                />
                <Route
                    path="list/edit/"
                    element={
                        <Modal>
                            <PageEdit />
                        </Modal>
                    }
                />
                <Route
                    path="gallery/"
                    element={
                        <Modal>
                            <PageGallery />
                        </Modal>
                    }
                />
                <Route
                    path="background/"
                    element={
                        <Modal>
                            <PageBackgroundEdit />
                        </Modal>
                    }
                />
                <Route
                    path="pallete/"
                    element={
                        <Modal>
                            <PagePallete />
                        </Modal>
                    }
                />
                                <Route
                    path="profile/"
                    element={
                        <Modal>
                            <PageDefaultProfile />
                        </Modal>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
