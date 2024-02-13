import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Please provide Network design document for Industrial automation",
    "Please provide Network design document for Observatory",
    "Please provide security aspects for SD-WAN Design"
];

const GPT4V_EXAMPLES: string[] = [
    "Please provide Network design document for Industrial automation",
    "Please provide Network design document for Observatory",
    "Please provide security aspects for SD-WAN Design"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
