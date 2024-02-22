import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './pages/Layout';
import BubbleSort from './pages/BubbleSort';
import SelectionSort from './pages/SelectionSort';
import InsertionSort from './pages/InsertionSort';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />}></Route>
					<Route path="/bubble-sort" element={<BubbleSort></BubbleSort>}></Route>
					<Route path="/selection-sort" element={<SelectionSort />}></Route>
					<Route path="/insertion-sort" element={<InsertionSort />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
