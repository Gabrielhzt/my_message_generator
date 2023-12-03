const introductions = [
    "Greetings and welcome!",
    "Hello and good day!",
    "Salutations and best wishes!",
    "Greetings, fellow coder!",
    "Hi there, coding enthusiast!",
];

const bodies = [
    "In the ever-evolving world of development, creativity sparks innovation.",
    "Crafting efficient code requires a blend of simplicity and meticulous documentation.",
    "Exploring the realms of collaboration leads to resilient and adaptable solutions.",
    "Embracing code modularity fosters reusability, simplifying the path to long-term maintenance.",
    "Curiosity is the driving force behind continuous learning in the dynamic field of development.",
    "Optimizing code goes beyond execution speed; it entails enhancing readability and maintainability.",
    "The scalability of an application is born from intentional architectural choices and flexible design.",
    "In the world of coding, clear documentation is as vital as the code itself, facilitating understanding and collaboration.",
    "Proactive problem resolution is the key to providing a seamless and reliable user experience.",
    "Remaining relevant in the ever-changing tech landscape requires adaptability to new technologies.",
];

const conclusions = [
    "Keep coding passionately!",
    "Wishing you a day filled with productive coding!",
    "May your code be bug-free and your solutions efficient!",
    "Stay curious, keep learning, and happy coding!",
    "Here's to a coding session filled with accomplishment!",
];

const getRandomComponent = components => {
    const randomIndex = Math.floor(Math.random() * components.length);
    return components[randomIndex];
}

const getRandomMessage = () => {
    const introduction = getRandomComponent(introductions);
    const body = getRandomComponent(bodies);
    const conclusion = getRandomComponent(conclusions);

    return `${introduction} ${body} ${conclusion}`;
}

console.log(getRandomMessage());