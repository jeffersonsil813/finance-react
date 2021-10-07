import { Item } from "../../types/Item";
import * as C from "./Styles";
import { categories } from "../../data/Categories";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    console.log(dateField);
    if (
      !isNaN(new Date(dateField).getTime()) &&
      categoryKeys.includes(categoryField) &&
      titleField.trim() !== "" &&
      valueField > 0
    ) {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });

      setDateField("");
      setCategoryField("");
      setTitleField("");
      setValueField(0);
    } else {
      toast.error("Por favor, preencha todos os campos", {
        duration: 3000,
      });
    }
  };

  return (
    <C.Container>
      <C.Date
        type="date"
        value={dateField}
        onChange={(e) => setDateField(e.target.value)}
      />

      <C.CategoriesSelect
        value={categoryField}
        onChange={(e) => setCategoryField(e.target.value)}
      >
        <option>Escolha uma categoria</option>
        {categoryKeys.map((key, index) => (
          <option key={index} value={key}>
            {categories[key].title}
          </option>
        ))}
      </C.CategoriesSelect>

      <C.Title
        type="text"
        maxLength={30}
        placeholder="Título"
        value={titleField}
        onChange={(e) => setTitleField(e.target.value)}
      />

      <C.Value
        type="number"
        min={10}
        step={0.5}
        value={valueField}
        onChange={(e) => setValueField(parseFloat(e.target.value))}
      />

      <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      <Toaster />
    </C.Container>
  );
};
