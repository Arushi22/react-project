import UserClass from  "../components/UserClass"

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <UserClass name={"Arushi Sharma"} location={"Dehradun"} contact = {"@arushi"} />
            <UserClass name={"Akashay Sharma"} location={"Goa"} contact = {"@akshay"} />
        </div>
    )
}

export default About
