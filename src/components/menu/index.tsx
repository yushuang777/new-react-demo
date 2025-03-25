import { routeList } from '../../route';
import { Button } from 'antd';
import useHook from './hooks';

function Menu() {
  const { handleJump } = useHook();
  return (
    <div>
      {routeList.map((item, index) => {
        return (
          <>
            {item.title && (
              <Button key={index} onClick={() => handleJump(item)}>
                {item.title}
              </Button>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Menu;
