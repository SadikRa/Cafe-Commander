
import { Link } from 'react-router-dom';
import Cover from '../../../Shared/Cover/Cover';
import MenuItems from '../../../Shared/MenuItems/MenuItems';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
                
            </div>
            <div className='text-center'>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVORITE FOOD</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;