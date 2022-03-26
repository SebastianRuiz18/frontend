import "./about.css";

const About = () =>{

    const exercise = () => {
        console.log("TEST TEST TEST TEST TEST")

        const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10];
        let sum = 0;
        let old = ages[0];
        for (let i = 0; i < ages.length; i++){
            sum = sum + ages[i];
        }
        for (let i = 0; i < ages.length; i++){
            if (ages[i] > old)
             old = ages[i]
        }
        console.log(sum);
        console.log(old)

    }

    return(
        <div className="about-page">
            <h1> About: My Online Store</h1>
            <h5>Created by: Sebastian Ruiz</h5>

            <button onClick={exercise}>Do the magic!</button>
        </div>
    );
};

export default About;