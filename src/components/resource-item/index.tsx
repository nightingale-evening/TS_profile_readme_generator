import Link from 'next/link';
import * as S from './styles';

type ResourceItemProps = {
  name: string;
  image: string;
  description: string;
  link: string;
  linkLabel: string;
  linkTarget?: string;
};

const ResourceItem = (props: ResourceItemProps) => {
  const { linkTarget = '_blank' } = props;

  return (
    <S.Container key={props.name}>
      <S.Image src={props.image} />

      <S.Name>{props.name}</S.Name>
      <S.Description>{props.description}</S.Description>

      {linkTarget === '_blank' ? (
        <S.SeeMore href={props.link} target="_blank">
          {props.linkLabel}
        </S.SeeMore>
      ) : (
        <Link href={props.link} passHref>
          <S.SeeMore>{props.linkLabel}</S.SeeMore>
        </Link>
      )}
    </S.Container>
  );
};

export { ResourceItem };
