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
import { PageTextEdit } from "./pages/TextEdit";

function App() {
    return (
        <>
            <Home />
            <Routes>
                <Route path="/" element={<></>} />
                <Route
                    path="/constructorpractice/blanks"
                    element={
                        <Modal>
                            <PageBlanks />
                        </Modal>
                    }
                />
                <Route
                    path="/constructorpractice/blanks/:id"
                    element={
                        <Modal>
                            <PageBlanksItem />
                        </Modal>
                    }
                />
                <Route
                    path="/constructorpractice/list"
                    element={
                        <Modal>
                            <PageProjects />
                        </Modal>
                    }
                />
                <Route
                    path="/constructorpractice/list/edit/"
                    element={
                        <Modal>
                            <PageEdit />
                        </Modal>
                    }
                />
                <Route
                    path="/constructorpractice/gallery/"
                    element={
                        <Modal>
                            <PageGallery />
                        </Modal>
                    }
                />
                <Route
                    path="/constructorpractice/background/"
                    element={
                        <Modal>
                            <PageBackgroundEdit />
                        </Modal>
                    }
                />
                <Route
                    path="/constructorpractice/pallete/"
                    element={
                        <Modal>
                            <PagePallete />
                        </Modal>
                    }
                />
                <Route
                    path="/constructorpractice/profile/"
                    element={
                        <Modal>
                            <PageDefaultProfile />
                        </Modal>
                    }
                />
                                <Route
                    path="/constructorpractice/text/"
                    element={
                        <Modal>
                            <PageTextEdit />
                        </Modal>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
