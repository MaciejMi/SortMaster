import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './pages/Layout';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />}></Route>
					{/* <Route path="/bubble-sort" element={<BubbleSort />}></Route>
					<Route path="/selection-sort" element={<SelectionSort />}></Route>
					<Route path="/insertion-sort" element={<BubbleSort />}></Route> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
