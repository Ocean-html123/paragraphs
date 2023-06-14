const sentence = [
    `When we study the many aspects of computing and computers, 
    it is important to know about the history of computers. 
    Charles Babbage designed an Analytical Engine which was a general 
    computer It helps us understand the growth and progress of technology 
    through the times. It is also an important topic for competitive and 
    banking exams.`,
    `The word 'computer' has a very interesting origin. 
    It was first used in the 16th century for a person who used to compute, 
    i.e. do calculations. The word was used in the same sense as a noun until 
    the 20th century. Women were hired as human computers to carry out all forms 
    of calculations and computations.
    By the last part of the 19th century, the word was also 
    used to describe machines that did calculations. The modern-day use of the word 
    is generally to describe programmable digital 
    devices that run on electricity.`,
    `Since the evolution of humans, devices have been used for 
    calculations for thousands of years. One of the earliest and most 
    well-known devices was an abacus. Then in 1822, the father of computers, 
    Charles Babbage began developing what would be the first mechanical computer. 
    And then in 1833 he actually designed an Analytical Engine which 
    was a general-purpose computer. It contained an ALU, some basic flow chart 
    principles and the concept of integrated memory.`,
    `Then more than a century later in the history of computers, 
    we got our first electronic computer for general purpose. It was the ENIAC, 
    which stands for Electronic Numerical Integrator and Computer. 
    The inventors of this computer were John W. Mauchly and J.Presper Eckert.`,
    `1st Generation: This was from the period of 1940 to 1955. 
    This was when machine language was developed for the use of computers. 
    They used vacuum tubes for the circuitry. For the purpose of memory, 
    they used magnetic drums. These machines were complicated, large, 
    and expensive. They were mostly reliant on batch operating systems and punch 
    cards. As output and input devices, magnetic tape and paper tape were 
    implemented. For example, ENIAC, UNIVAC-1, EDVAC, and so on.`,
    `2nd Generation: The years 1957-1963 were referred to as the 
    “second generation of computers” at the time. 
    In second-generation computers, COBOL and FORTRAN are employed as 
    assembly languages and programming languages. Here they advanced from 
    vacuum tubes to transistors. This made the computers smaller, faster and 
    more energy-efficient. And they advanced from binary to assembly languages. 
    For instance, IBM 1620, IBM 7094, CDC 1604, CDC 3600, and so forth.`,
    `3rd Generation: The hallmark of this period (1964-1971) was 
    the development of the integrated circuit.  A single integrated circuit (IC) 
    is made up of many transistors, which increases the power of a computer 
    while simultaneously lowering its cost. These computers were quicker, smaller, 
    more reliable, and less expensive than their predecessors. 
    High-level programming languages such as FORTRON-II to IV, 
    COBOL, and PASCAL PL/1 were utilized. For example, the IBM-360 series, 
    the Honeywell-6000 series, and the IBM-370/168.`,
    `4th Generation: The invention of the microprocessors 
    brought along the fourth generation of computers. 
    The years 1971-1980 were dominated by fourth generation computers. C, C++ and 
    Java were the programming languages utilized in this generation of computers. 
    For instance, the STAR 1000, PDP 11, CRAY-1, CRAY-X-MP, and Apple II. 
    This was when we started producing computers for home use.`,
    `5th Generation: These computers have been utilized since 1980 
    and continue to be used now. This is the present and the future of 
    the computer world. The defining aspect of this generation is artificial 
    intelligence. The use of parallel processing and superconductors are 
    making this a reality and provide a lot of scope for the future. 
    Fifth-generation computers use ULSI (Ultra Large Scale Integration) technology. 
    These are the most recent and sophisticated computers.`,
]



const ipsum = document.querySelector('.ipsum');
const amount = document.getElementById('amount');
const text = document.querySelector('.text');0

const random = Math.floor(Math.random() * sentence.length);

ipsum.addEventListener('submit', function(e) {
    e.preventDefault();
    const value =  parseInt(amount.value);
    if (isNaN(value) || value <= 0 || value > 8) {
        text.innerHTML = `<p class="result">${sentence[random]}</p>`
    } else {
        let tempText = sentence.slice(0, value);
          tempText = tempText.map(function (item){
            return `<p class="result">${item}</p>`;
          })
          text.innerHTML = tempText;
    }
});