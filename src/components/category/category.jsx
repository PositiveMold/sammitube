import { Stack } from "@mui/material";
import { categoryItem } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      border={"none"}
      sx={{ overflowX: "scroll", gap: 0.5 }}
    >
      {categoryItem.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "0",
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && colors.primary,
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color:
                item.name === selectedCategory
                  ? colors.primary
                  : colors.secondary,
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
