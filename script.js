const introductions = [
    "Greetings!",
    "Hello there!",
    "Hi!",
    "Hey!",
    "Salutations!",
];

const bodies = [
    "Innovation arises from perseverance and creativity.",
    "Efficiency lies in the simplicity of code and clarity in documentation.",
    "Collaboration among developers leads to more robust and versatile solutions.",
    "Code modularity promotes reusability and simplifies long-term maintenance.",
    "Constant curiosity fuels ongoing learning in the field of development.",
    "Code optimization extends beyond execution speed; it also involves readability and maintainability.",
    "Application scalability comes from thoughtful architectural choices and flexible design.",
    "Clear documentation is as crucial as the code itself for ease of understanding and collaboration.",
    "Proactive problem resolution ensures a seamless and reliable user experience.",
    "Adaptability to new technologies is essential to remain relevant in an ever-changing technological landscape.",
];

const conclusions = [
    "Keep coding!",
    "Happy coding!",
    "May your bugs be minimal and your code efficient!",
    "Stay curious and keep learning!",
    "Wishing you a productive coding session!",
];

function getRandomComponent(components) {
    const randomIndex = Math.floor(Math.random() * components.length);
    return components[randomIndex];
}

function getRandomMessage() {
    const introduction = getRandomComponent(introductions);
    const body = getRandomComponent(bodies);
    const conclusion = getRandomComponent(conclusions);

    return `${introduction} ${body} ${conclusion}`;
}

console.log(getRandomMessage());

