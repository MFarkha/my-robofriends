import Card from './Card';
import { IRobot } from '../app/store';

type CardListProps = {
    robots: Array<IRobot>
};

const CardList = ({ robots }: CardListProps) => {
    return (
        <div>
            {
                robots.map((robot) => {
                    return (
                        <Card robot={robot}/>
                    );
                })
            }
        </div>
    );
}

export default CardList;