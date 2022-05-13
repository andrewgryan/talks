import { createEffect, createSignal, Switch, Match, onMount } from "solid-js";
import dedent from "ts-dedent";
import {
    Routes,
    Route,
    Navigate,
    useParams,
    useNavigate,
} from "solid-app-router";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const Talk = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    const [slideNumber, setSlideNumber] = createSignal(parseInt(params.id));

    createEffect(() => {
        navigate("/" + slideNumber());
    });

    onMount(() => {
        document.addEventListener("keydown", (ev) => {
            if (ev.key === " ") {
                setSlideNumber((slideNumber() + 1) % 2);
            }
            console.log(ev);
        });
    });

    return (
        <div>
            <Switch>
                <Match when={slideNumber() === 0}>
                    <div class="h-screen bg-gray-200">
                        <div class="h-full flex flex-col justify-center items-center">
                            <div class="p-2 text-4xl h-1/2 w-1/2 border border-gray-500 border-dashed">
                                Title
                            </div>
                        </div>
                    </div>
                </Match>
                <Match when={slideNumber() === 1}>
                    <div class="h-screen bg-gray-200">
                        <div className="flex flex-col space-y-4 h-full justify-center items-center">
                            <div class="flex flex-col h-1/2 w-1/2 space-y-2">
                                <h1 class="border border-gray-500 border-dashed p-2 text-xl">
                                    Heading
                                </h1>
                                <div class="flex-grow flex flex-col space-y-1 border border-gray-500 border-dashed p-2">
                                    <Code>{dedent`
                                    def test_example():
                                        pass
                                    `}</Code>
                                    <Code language="sh">{dedent`
                                    # Pytest with verbose output
                                    pytest -vv
                                    `}</Code>
                                </div>
                            </div>
                        </div>
                    </div>
                </Match>
            </Switch>
        </div>
    );
};

const Code = (props) => {
    let ref;

    onMount(() => {
        hljs.highlightElement(ref);
    });
    return (
        <pre>
            <code
                class={
                    props.language
                        ? props.language + " whitespace-pre"
                        : "python whitespace-pre"
                }
                ref={ref}
            >
                {props.children}
            </code>
        </pre>
    );
};

function App() {
    const redirect = ({ navigate, location }) => {
        console.log(location);
        if (["", "/"].indexOf(location.pathname) !== -1) {
            return "/0";
        } else {
            return location.pathname;
        }
    };
    return (
        <Routes>
            <Route path="/">
                <Navigate href={redirect} />
            </Route>
            <Route path="/:id" element={<Talk />} />
        </Routes>
    );
}

export default App;
