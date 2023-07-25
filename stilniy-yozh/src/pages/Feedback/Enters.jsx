export const Enters = (props) => {
  const { text, type, placeholder } = props
  return (
    <>
      <label className="feed-form__name">Имя ребенка</label>
      <input type="text" placeholder="Имя" name="name" />
    </>
  );
};
