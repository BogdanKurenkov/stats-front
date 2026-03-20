import { ClipLoader, PulseLoader, BeatLoader, RingLoader, ScaleLoader, MoonLoader } from 'react-spinners';
import { SpinnerProps, SpinnerType } from './Spinner.types';
import { DEFAULT_PARAMS } from './Spinner.contants';

const loaderMap: Record<SpinnerType, any> = {
  spinner: ClipLoader,
  pulse: PulseLoader,
  beat: BeatLoader,
  ring: RingLoader,
  scale: ScaleLoader,
  moon: MoonLoader,
};

export const Spinner = ({
  size = DEFAULT_PARAMS.size,
  type = DEFAULT_PARAMS.type,
  color = DEFAULT_PARAMS.color,
  loading = true,
  ...rest
}: SpinnerProps) => {
  const LoaderComponent = loaderMap[type] || ClipLoader;

  return (
    <LoaderComponent
      size={size}
      color={color}
      loading={loading}
      {...rest}
    />
  );
};

Spinner.displayName = 'Spinner';