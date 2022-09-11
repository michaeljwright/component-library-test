import React from 'react';
import { Text } from '../../main';
import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    variant: {
      description: 'Visual variant',
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Font size of link',
      table: {
        type: { summary: '5|6|7' },
      },
      control: {
        type: 'radio',
        options: [5, 6, 7],
      },
    },
    href: {
      description: 'Target address',
    },
    isExternal: {
      description: 'Use when link is external',
      table: {
        type: {
          detail:
            'Adding the `isExternal` prop will also add an icon & appropriate HTML attributes. ',
        },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Link text', href: '#' };

export const ParagraphLink = () => (
  <Text>
    Create consistency for the entire incident response lifecycle with{' '}
    <Link rel="noopener" target="_blank" href="https://google.com/">
      Google
    </Link>
    , the incident management platform for teams of all sizes.
  </Text>
);

export const LongParagraphLink = () => (
  <Text>
    Paragraphs are the building blocks of papers. Many students define
    paragraphs in terms of length: a paragraph is a group of at least five
    sentences, a paragraph is half a page long, etc. In reality, though, the
    unity and coherence of ideas among sentences is what constitutes a
    paragraph. A paragraph is defined as “a group of sentences or a single
    sentence that forms a unit” (Lunsford and Connors 116). Length and
    appearance do not determine whether a section in a paper is a paragraph. For
    instance, in some styles of writing, particularly journalistic styles, a
    paragraph can be just one sentence long.{' '}
    <Link href="#">
      Ultimately, a paragraph is a sentence or group of sentences that support
      one main idea.
    </Link>{' '}
    In this handout, we will refer to this as the “controlling idea,” because it
    controls what happens in the rest of the paragraph.
  </Text>
);

export const SizeSixLink = Template.bind({});
SizeSixLink.args = { children: 'Link text', href: '#', size: 6 };

export const SizeSevenLink = Template.bind({});
SizeSevenLink.args = { children: 'Link text', href: '#', size: 7 };

export const ExternalLink = Template.bind({});
ExternalLink.args = { children: 'Link text', href: '#', isExternal: true };

export const SizeSixExternalLink = Template.bind({});
SizeSixExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 6,
  isExternal: true,
};

export const SizeSevenExternalLink = Template.bind({});
SizeSevenExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 7,
  isExternal: true,
};

export const SizeSevenExternalLongLink = Template.bind({});
SizeSevenExternalLongLink.args = {
  children: 'This is a very long link that should wrap when it needs to.',
  href: '#',
  size: 7,
  isExternal: true,
  maxWidth: '100px',
};

export const ReverseLink = Template.bind({});
ReverseLink.args = { children: 'Link text', href: '#', variant: 'reverse' };
ReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSixReverseLink = Template.bind({});
SizeSixReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 6,
  variant: 'reverse',
};
SizeSixReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSevenReverseLink = Template.bind({});
SizeSevenReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 7,
  variant: 'reverse',
};
SizeSevenReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const ReverseExternalLink = Template.bind({});
ReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  isExternal: true,
  variant: 'reverse',
};
ReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const ParagraphLinkReverse = () => (
  <Text color="grey.0">
    Create consistency for the entire incident response lifecycle with{' '}
    <Link
      variant="reverse"
      rel="noopener"
      target="_blank"
      href="https://google.com/"
    >
      Google
    </Link>
    , the incident management platform for teams of all sizes.
  </Text>
);
ParagraphLinkReverse.parameters = {
  backgrounds: { default: 'dark' },
};

export const LongParagraphLinkReverse = () => (
  <Text color="grey.0">
    Paragraphs are the building blocks of papers. Many students define
    paragraphs in terms of length: a paragraph is a group of at least five
    sentences, a paragraph is half a page long, etc. In reality, though, the
    unity and coherence of ideas among sentences is what constitutes a
    paragraph. A paragraph is defined as “a group of sentences or a single
    sentence that forms a unit” (Lunsford and Connors 116). Length and
    appearance do not determine whether a section in a paper is a paragraph. For
    instance, in some styles of writing, particularly journalistic styles, a
    paragraph can be just one sentence long.{' '}
    <Link variant="reverse" href="#">
      Ultimately, a paragraph is a sentence or group of sentences that support
      one main idea.
    </Link>{' '}
    In this handout, we will refer to this as the “controlling idea,” because it
    controls what happens in the rest of the paragraph.
  </Text>
);
LongParagraphLinkReverse.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSixReverseExternalLink = Template.bind({});
SizeSixReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 6,
  variant: 'reverse',
  isExternal: true,
};
SizeSixReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSevenReverseExternalLink = Template.bind({});
SizeSevenReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 7,
  variant: 'reverse',
  isExternal: true,
};
SizeSevenReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSevenReverseExternalLongLink = Template.bind({});
SizeSevenReverseExternalLongLink.args = {
  children: 'This is a very long link that should wrap when it needs to.',
  href: '#',
  size: 7,
  isExternal: true,
  variant: 'reverse',
  maxWidth: '100px',
};
SizeSevenReverseExternalLongLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const GradientBold = Template.bind({});
GradientBold.args = {
  children: 'Fancy gradient link',
  href: '#',
  variant: 'gradientBold',
};

export const BoldBlue = Template.bind({});
BoldBlue.args = {
  children: 'Blue bold link',
  href: '#',
  variant: 'bold',
  size: 6,
  linkColor: 'blue',
};

export const BoldDefault = Template.bind({});
BoldDefault.args = {
  children: 'Purple default bold link',
  href: '#',
  variant: 'bold',
  size: 6,
};

export const GradientLight = () => (
  <Text size={6} color="grey.70">
    Creating an account means you agree to our{' '}
    <Link variant="gradientLight" size={6} href="#">
      Terms of Service
    </Link>{' '}
    and{' '}
    <Link variant="gradientLight" size={6} href="#">
      Privacy Policy
    </Link>
  </Text>
);
