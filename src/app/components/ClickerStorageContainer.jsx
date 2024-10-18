import ClickersInStorage from './ClickersInStorage';

const ClickerStorageContainer = ({ clickers }) => {
  return (
    <div className="flex justify-end">
      <ClickersInStorage clickers={clickers} />
    </div>
  );
};

export default ClickerStorageContainer;
