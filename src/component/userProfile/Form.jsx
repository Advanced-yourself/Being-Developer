
const Form = () => {
  return (
    <div>
      <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value="rajbharvivek513@gmail.com"
          disabled
        />
      </div>

      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>

      <div>
        <label htmlFor="dailyGoal">Daily Goal:</label>
        <input type="text" id="dailyGoal" name="dailyGoal" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
  )
}

export default Form
