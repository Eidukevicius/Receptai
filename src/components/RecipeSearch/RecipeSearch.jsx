import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeSearch() {
	const [suggestions, setSuggestions] = useState([]);
	const [isAlerted, setIsAlerted] = useState(false);

	const navigate = useNavigate();

	async function fetchRecipes(e) {
		let response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/search.php?s=" + e.target.value
		);
		response = await response.json();
		setSuggestions(response.meals || []);
	}

	function onSearch(e) {
		e.preventDefault();
		if (suggestions.length != 1) {
			setIsAlerted(true);
		} else {
			setIsAlerted(false);
			navigate(`/recipe/${suggestions[0].idMeal}`);
		}
	}

	return (
		<div className="container my-3">
			<div className="row mb-4 mx-auto">
				{isAlerted && (
					<div className="alert alert-danger" role="alert">
						Provided recipe name is not specific enough or invalid!
					</div>
				)}

				<input
					className="col form-control me-3"
					type="text"
					list="recipes-list"
					onChange={fetchRecipes}
					placeholder="Search for a recipe..."
				/>
				<div className="button-medium col-auto" onClick={onSearch}>
                    <button type="button" class="btn btn-warning">Search</button>
				</div>

				<datalist id="recipes-list">
					{suggestions.map((item) => (
						<option key={item.idMeal} value={item.strMeal} />
					))}
				</datalist>
			</div>
		</div>
	);
}