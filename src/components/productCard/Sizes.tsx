type Props = {
  sizes: ShoeSize;
  setSize: Dispatcher<number>;
  showSizes: boolean;
  setShowSizes: Dispatcher<boolean>;
};

const Sizes = ({ sizes, setSize, showSizes, setShowSizes }: Props) => {
  return (
    <div className="grid gap-1 size-popover">
      {sizes.map((size) => (
        <div className="g-col-4" key={size.number}>
          <button
            type="button"
            className="size-button"
            onClick={() => (setSize(size.number), setShowSizes(!showSizes))}
            disabled={!size.inStock}
          >
            {size.number}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sizes;
