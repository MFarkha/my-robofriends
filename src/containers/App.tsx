import MainPage from '../components/MainPage';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectSearchField, robotsSearched } from '../features/searchRobots/searchRobotsSlice';
import { selectRobots, requestRobots } from '../features/requestRobots/requestRobotsSlice';

const App = () => {
    const searchField = useAppSelector(selectSearchField)
    const dispatch = useAppDispatch()

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(robotsSearched(event.currentTarget.value))
    }
    const onRequestRobots = () => {
        dispatch(requestRobots())
    }
    const robotsData = useAppSelector(selectRobots)
    const props = Object.assign({ searchField, onSearchChange, onRequestRobots }, robotsData)
    return (
        <MainPage { ...props } />
    );
}

export default App;