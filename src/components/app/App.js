import Footer from "../footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import RecipePage from "../RecipePage/RecipePage";

export default function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}>
						<Route path="/category/:id" element={<Home />} />
					</Route>
					<Route path="/recipe/:id" element={<RecipePage />} />
				</Routes>
			</Router>

			<Footer />
		</>
	);
}