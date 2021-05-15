/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';
import { FlexBox } from '../box';
import { useCardStyles } from '../card';
import { Stack } from '../stack';
import { Text } from '../typography';
import { useTheme } from '../theme';

type ContentCardProps = {
  desc?: string;
  path: string;
  image?: string;
  title: string;
  tag: 'Design' | 'Development';
};

export const ContentCard = ({
  path,
  image,
  desc,
  title,
  tag
}: ContentCardProps) => {
  const { colors, fontsizes, fontFamilies } = useTheme();
  const cardStyles = useCardStyles();

  return (
    <Link
      to={path}
      css={{
        ...cardStyles,
        aspectRatio: '1',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        minHeight: 250,
        boxSizing: 'border-box',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 0,
        wordWrap: 'normal',

        '&:hover': {
          backgroundColor: colors.background.hover
        }
      }}
    >
      {image && (
        <div
          css={{
            display: 'flex',
            flex: 1,
            backgroundColor: colors.global.border,
            borderBottom: `1px solid ${colors.global.border}`,
            borderTopLeftRadius: cardStyles.borderRadius,
            borderTopRightRadius: cardStyles.borderRadius,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            width: '100%'
          }}
        />
      )}

      <FlexBox>
        <Stack gap="xsmall" padding="medium">
          <Text as="span" size="xsmall">
            {tag}
          </Text>
          <span
            css={{
              fontFamily: fontFamilies.heading,
              color: colors.text.emphasis,
              fontSize: fontsizes.large,
              fontWeight: 600,
              textDecoration: 'none',
              display: 'block',
              width: '100%'
            }}
          >
            {title}
          </span>
          {!image && desc && <Text>{desc}</Text>}
        </Stack>
      </FlexBox>
    </Link>
  );
};
