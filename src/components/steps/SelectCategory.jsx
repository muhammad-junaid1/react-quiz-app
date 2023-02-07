import StyledCategoriesList from "../../styles/StyledCategoriesList";
import StyledNextBtn from "../../styles/StyledNextBtn";
import { useState } from "react";

const categoriesList = [
  "Science",
  "Food & Drink",
  "History",
  "Music",
  "Geography",
  "Film & TV",
  "Arts & Literature",
  "Society & Culture",
  "General Knowledge",
  "Sport & Leisure"
];

const SelectCategory = ({dispatch, ACTIONS}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleClickCategory = (category) => {
        if(selectedCategories.find((cat) => cat === category)) {
            setSelectedCategories((selectedCategories)=> {
                return selectedCategories.filter((cat) => cat !== category);
            });
        } else {
            setSelectedCategories((selectedCategories) => {
                return [...selectedCategories, category];
            });
        }
    }

    const handleClickNext = () => {
        dispatch({
            type: ACTIONS.SET_CATEGORIES,
            payload: selectedCategories.join(",").replaceAll("&", "and").replaceAll(" ", "_"),
        });
        dispatch({
            type: ACTIONS.SET_NEXT_STEP
        });
    }
  return (
    <>
      <h2>Select Categories</h2>
      <StyledCategoriesList>
         {categoriesList.map((category) => {
            return <button key={category} style={selectedCategories.find((cat) => cat === category) ? {background: "black", color: "white"} : {}} onClick={() => handleClickCategory(category)}>{category}</button>;
         })}
      </StyledCategoriesList>
      <StyledNextBtn disabled={!selectedCategories.length} onClick={handleClickNext}>Next</StyledNextBtn>
    </>
  );
};

export default SelectCategory;
