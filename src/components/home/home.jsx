import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Section from "../section/Section";
import Recipes from "../recipes/Recipes";
import RecipeSearch from "../RecipeSearch/RecipeSearch";

export default function Home() {
	let { id } = useParams();
	return (
		<>
			<Header/>
            <Section/>
            <RecipeSearch/>
            <Recipes/>
		</>
	);
}
