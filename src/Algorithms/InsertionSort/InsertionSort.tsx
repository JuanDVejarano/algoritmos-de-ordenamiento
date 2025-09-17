import Card from "../../Components/Card/Card";
import "./InsertionSort.scss";
import { useState } from "react";
import { useEffect } from "react";

interface CardsProps {
    color?: "blue" | "red" | "green" | "purple";
    value?: number;
    position?: number;
    status?: "default" | "active" | "sorted";
}

function InsertionSort() {
    const numbers = [
        numberRandom(),
        numberRandom(),
        numberRandom(),
        numberRandom(),
        numberRandom(),
        numberRandom(),
        numberRandom(),
        numberRandom(),
        numberRandom(),
        numberRandom(),
    ];

    const [cards, setCards] = useState<CardsProps[]>([]);
    const [keyCard, setKeyCard] = useState<CardsProps>({
        color: "blue",
        value: 1,
        position: -1,
        status: "default",
    });

    const [inProgress, setInProgress] = useState(false);
    // Initialize cards with a fixed array
    const initialCardsProps: CardsProps[] = [
        {
            color: colorRandom(),
            value: numbers[0],
            position: 0,
            status: "sorted",
        },
        {
            color: colorRandom(),
            value: numbers[1],
            position: 1,
            status: "default",
        },
        {
            color: colorRandom(),
            value: numbers[2],
            position: 2,
            status: "default",
        },
        {
            color: colorRandom(),
            value: numbers[3],
            position: 3,
            status: "default",
        },
        {
            color: colorRandom(),
            value: numbers[4],
            position: 4,
            status: "default",
        },
        {
            color: colorRandom(),
            value: numbers[5],
            position: 5,
            status: "default",
        },
        {
            color: colorRandom(),
            value: numbers[6],
            position: 6,
            status: "default",
        },
        {
            color: colorRandom(),
            value: numbers[7],
            position: 7,
            status: "default",
        },
    ];
    useEffect(() => {
        setCards(initialCardsProps);
    }, []);

    function colorRandom(): "blue" | "red" | "green" | "purple" {
        const colors = ["blue", "red", "green", "purple"] as const;
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    function numberRandom() {
        return Math.floor(Math.random() * 100);
    }

    async function insertionSort() {
        setInProgress(true);
        let arr = [...cards.map((card) => card.value ?? 0)];
        for (let i = 1; i < arr.length; i++) {
            debugger;
            let key = arr[i];
            let j = i - 1;
            // Marcar el elemento activo
            viewKeyCard(i); // metodo para vizualizar la carta que se esta evaluando
            await new Promise((res) => setTimeout(res, 2000)); // Esperar 2 segundos para ver la carta clave
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
                modificarObjeto(arr, i, j + 1); // Actualizar estados
                await new Promise((res) => setTimeout(res, 2000)); // Esperar 2 segundos para ver el cambio
            }
            arr[j + 1] = key;
            modificarObjeto(arr, i, j + 1); // Actualizar estados
            await new Promise((res) => setTimeout(res, 2000)); // Esperar 2 segundos para ver el cambio final
        }
        // Al final, marcar todos como sorted
        setCards((cards) =>
            cards.map((card, idx) => ({
                ...card,
                value: arr[idx],
                status: "sorted",
            }))
        );
        setInProgress(false);
    }

    function viewKeyCard(index: number) {
        const key = cards[index];
        setKeyCard({ ...key, position: index, status: "active" });
    }

    function modificarObjeto(
        sortedArray: number[],
        activeIndex?: number,
        insertIndex?: number
    ) {
        const newArray = cards.map((card, index) => {
            let status: "default" | "active" | "sorted" = "default";
            if (activeIndex !== undefined && index === activeIndex)
                status = "active";
            else if (activeIndex !== undefined && index < activeIndex)
                status = "sorted";
            if (insertIndex !== undefined && index === insertIndex)
                status = "active";
            return {
                ...card,
                value: sortedArray[index],
                color: card.color,
                status,
            };
        });
        setCards(newArray);
    }

    return (
        <main>
            <section className="insertionSort">
                {/* <Card con la key a validar/> */}
                <div className="CardKey">
                    <Card
                        color={keyCard.color}
                        value={keyCard.value}
                        status={keyCard.status}
                        position={keyCard.position}
                    />
                </div>
                <div className="CardsContainer">
                    {cards.map((value, index) => (
                        <Card
                            key={index}
                            color={value.color}
                            value={value.value}
                            position={index}
                            status={value.status}
                        />
                    ))}
                </div>
                <div className="SortButtonContainer">
                    <button onClick={insertionSort} disabled={inProgress}>
                        {inProgress ? "Ordenando..." : "Ordenar"}
                    </button>
                </div>
            </section>
        </main>
    );
}

export default InsertionSort;
