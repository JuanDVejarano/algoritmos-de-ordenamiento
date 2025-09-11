import Card from "../../Components/Card/Card";
import "./InsertionSort.scss";
import { useState } from "react";
import { useEffect } from "react";

function InsertionSort() {
    const [cards, setCards] = useState<number[]>([]);
    // Initialize cards with a fixed array
    const initialArray = [42, 7, 19, 3, 25, 14, 8, 31];
    useEffect(() => {
        setCards(initialArray);
    }, []);

    function colorRandom() {
        const colors = ["blue", "red", "green", "purple"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    async function insertionSort() {
        const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
        const newArray = [...cards];
        for (let i = 1; i < newArray.length; i++) {
            const key = newArray[i];
            let j = i - 1;
            while (j >= 0 && newArray[j] > key) {
                newArray[j + 1] = newArray[j];
                j--;
            }
            newArray[j + 1] = key;
            setCards([...newArray]);
            await delay(3000);
        }
    }

    return (
        <main>
            <section className="insertionSort">
                {cards.map((value, index) => (
                    <Card
                        key={index}
                        color={colorRandom()}
                        value={value}
                        position={index}
                    />
                ))}
            </section>
            <button onClick={insertionSort}>Sort</button>
        </main>
    );
}

export default InsertionSort;
