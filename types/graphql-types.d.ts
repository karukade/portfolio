export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  heroImage?: Maybe<ContentfulAsset>;
  author?: Maybe<ContentfulPerson>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  body?: Maybe<ContentfulBlogPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
};


export type ContentfulBlogPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBodyTextNodeGroupConnection>;
};


export type ContentfulBlogPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};


export type ContentfulBlogPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};

export type ContentfulBlogPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyTextNode>;
  node: ContentfulBlogPostBodyTextNode;
  previous?: Maybe<ContentfulBlogPostBodyTextNode>;
};

export type ContentfulBlogPostBodyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body';

export type ContentfulBlogPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  node: ContentfulBlogPostDescriptionTextNode;
  previous?: Maybe<ContentfulBlogPostDescriptionTextNode>;
};

export type ContentfulBlogPostDescriptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description';

export type ContentfulBlogPostDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'publishDate'
  | 'tags'
  | 'heroImage___id'
  | 'heroImage___parent___id'
  | 'heroImage___parent___parent___id'
  | 'heroImage___parent___parent___children'
  | 'heroImage___parent___children'
  | 'heroImage___parent___children___id'
  | 'heroImage___parent___children___children'
  | 'heroImage___parent___internal___content'
  | 'heroImage___parent___internal___contentDigest'
  | 'heroImage___parent___internal___description'
  | 'heroImage___parent___internal___fieldOwners'
  | 'heroImage___parent___internal___ignoreType'
  | 'heroImage___parent___internal___mediaType'
  | 'heroImage___parent___internal___owner'
  | 'heroImage___parent___internal___type'
  | 'heroImage___children'
  | 'heroImage___children___id'
  | 'heroImage___children___parent___id'
  | 'heroImage___children___parent___children'
  | 'heroImage___children___children'
  | 'heroImage___children___children___id'
  | 'heroImage___children___children___children'
  | 'heroImage___children___internal___content'
  | 'heroImage___children___internal___contentDigest'
  | 'heroImage___children___internal___description'
  | 'heroImage___children___internal___fieldOwners'
  | 'heroImage___children___internal___ignoreType'
  | 'heroImage___children___internal___mediaType'
  | 'heroImage___children___internal___owner'
  | 'heroImage___children___internal___type'
  | 'heroImage___internal___content'
  | 'heroImage___internal___contentDigest'
  | 'heroImage___internal___description'
  | 'heroImage___internal___fieldOwners'
  | 'heroImage___internal___ignoreType'
  | 'heroImage___internal___mediaType'
  | 'heroImage___internal___owner'
  | 'heroImage___internal___type'
  | 'heroImage___contentful_id'
  | 'heroImage___file___url'
  | 'heroImage___file___details___size'
  | 'heroImage___file___fileName'
  | 'heroImage___file___contentType'
  | 'heroImage___title'
  | 'heroImage___description'
  | 'heroImage___node_locale'
  | 'heroImage___fixed___base64'
  | 'heroImage___fixed___tracedSVG'
  | 'heroImage___fixed___aspectRatio'
  | 'heroImage___fixed___width'
  | 'heroImage___fixed___height'
  | 'heroImage___fixed___src'
  | 'heroImage___fixed___srcSet'
  | 'heroImage___fixed___srcWebp'
  | 'heroImage___fixed___srcSetWebp'
  | 'heroImage___resolutions___base64'
  | 'heroImage___resolutions___tracedSVG'
  | 'heroImage___resolutions___aspectRatio'
  | 'heroImage___resolutions___width'
  | 'heroImage___resolutions___height'
  | 'heroImage___resolutions___src'
  | 'heroImage___resolutions___srcSet'
  | 'heroImage___resolutions___srcWebp'
  | 'heroImage___resolutions___srcSetWebp'
  | 'heroImage___fluid___base64'
  | 'heroImage___fluid___tracedSVG'
  | 'heroImage___fluid___aspectRatio'
  | 'heroImage___fluid___src'
  | 'heroImage___fluid___srcSet'
  | 'heroImage___fluid___srcWebp'
  | 'heroImage___fluid___srcSetWebp'
  | 'heroImage___fluid___sizes'
  | 'heroImage___sizes___base64'
  | 'heroImage___sizes___tracedSVG'
  | 'heroImage___sizes___aspectRatio'
  | 'heroImage___sizes___src'
  | 'heroImage___sizes___srcSet'
  | 'heroImage___sizes___srcWebp'
  | 'heroImage___sizes___srcSetWebp'
  | 'heroImage___sizes___sizes'
  | 'heroImage___resize___base64'
  | 'heroImage___resize___tracedSVG'
  | 'heroImage___resize___src'
  | 'heroImage___resize___width'
  | 'heroImage___resize___height'
  | 'heroImage___resize___aspectRatio'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___name'
  | 'author___birthday'
  | 'author___jobHistory'
  | 'author___skill'
  | 'author___skill___id'
  | 'author___skill___parent___id'
  | 'author___skill___parent___children'
  | 'author___skill___children'
  | 'author___skill___children___id'
  | 'author___skill___children___children'
  | 'author___skill___internal___content'
  | 'author___skill___internal___contentDigest'
  | 'author___skill___internal___description'
  | 'author___skill___internal___fieldOwners'
  | 'author___skill___internal___ignoreType'
  | 'author___skill___internal___mediaType'
  | 'author___skill___internal___owner'
  | 'author___skill___internal___type'
  | 'author___skill___name'
  | 'author___skill___onlyHobby'
  | 'author___skill___key'
  | 'author___skill___person'
  | 'author___skill___person___id'
  | 'author___skill___person___children'
  | 'author___skill___person___name'
  | 'author___skill___person___birthday'
  | 'author___skill___person___jobHistory'
  | 'author___skill___person___skill'
  | 'author___skill___person___spaceId'
  | 'author___skill___person___contentful_id'
  | 'author___skill___person___createdAt'
  | 'author___skill___person___updatedAt'
  | 'author___skill___person___node_locale'
  | 'author___skill___person___github'
  | 'author___skill___person___blog_post'
  | 'author___skill___spaceId'
  | 'author___skill___contentful_id'
  | 'author___skill___createdAt'
  | 'author___skill___updatedAt'
  | 'author___skill___sys___revision'
  | 'author___skill___node_locale'
  | 'author___skill___post'
  | 'author___skill___post___id'
  | 'author___skill___post___children'
  | 'author___skill___post___title'
  | 'author___skill___post___features'
  | 'author___skill___post___isJob'
  | 'author___skill___post___video'
  | 'author___skill___post___links'
  | 'author___skill___post___isPined'
  | 'author___skill___post___skills'
  | 'author___skill___post___spaceId'
  | 'author___skill___post___contentful_id'
  | 'author___skill___post___createdAt'
  | 'author___skill___post___updatedAt'
  | 'author___skill___post___node_locale'
  | 'author___shortBio___id'
  | 'author___shortBio___parent___id'
  | 'author___shortBio___parent___children'
  | 'author___shortBio___children'
  | 'author___shortBio___children___id'
  | 'author___shortBio___children___children'
  | 'author___shortBio___internal___content'
  | 'author___shortBio___internal___contentDigest'
  | 'author___shortBio___internal___description'
  | 'author___shortBio___internal___fieldOwners'
  | 'author___shortBio___internal___ignoreType'
  | 'author___shortBio___internal___mediaType'
  | 'author___shortBio___internal___owner'
  | 'author___shortBio___internal___type'
  | 'author___shortBio___shortBio'
  | 'author___spaceId'
  | 'author___contentful_id'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___revision'
  | 'author___node_locale'
  | 'author___github'
  | 'author___blog_post'
  | 'author___blog_post___id'
  | 'author___blog_post___parent___id'
  | 'author___blog_post___parent___children'
  | 'author___blog_post___children'
  | 'author___blog_post___children___id'
  | 'author___blog_post___children___children'
  | 'author___blog_post___internal___content'
  | 'author___blog_post___internal___contentDigest'
  | 'author___blog_post___internal___description'
  | 'author___blog_post___internal___fieldOwners'
  | 'author___blog_post___internal___ignoreType'
  | 'author___blog_post___internal___mediaType'
  | 'author___blog_post___internal___owner'
  | 'author___blog_post___internal___type'
  | 'author___blog_post___title'
  | 'author___blog_post___slug'
  | 'author___blog_post___publishDate'
  | 'author___blog_post___tags'
  | 'author___blog_post___heroImage___id'
  | 'author___blog_post___heroImage___children'
  | 'author___blog_post___heroImage___contentful_id'
  | 'author___blog_post___heroImage___title'
  | 'author___blog_post___heroImage___description'
  | 'author___blog_post___heroImage___node_locale'
  | 'author___blog_post___author___id'
  | 'author___blog_post___author___children'
  | 'author___blog_post___author___name'
  | 'author___blog_post___author___birthday'
  | 'author___blog_post___author___jobHistory'
  | 'author___blog_post___author___skill'
  | 'author___blog_post___author___spaceId'
  | 'author___blog_post___author___contentful_id'
  | 'author___blog_post___author___createdAt'
  | 'author___blog_post___author___updatedAt'
  | 'author___blog_post___author___node_locale'
  | 'author___blog_post___author___github'
  | 'author___blog_post___author___blog_post'
  | 'author___blog_post___description___id'
  | 'author___blog_post___description___children'
  | 'author___blog_post___description___description'
  | 'author___blog_post___body___id'
  | 'author___blog_post___body___children'
  | 'author___blog_post___body___body'
  | 'author___blog_post___spaceId'
  | 'author___blog_post___contentful_id'
  | 'author___blog_post___createdAt'
  | 'author___blog_post___updatedAt'
  | 'author___blog_post___sys___revision'
  | 'author___blog_post___node_locale'
  | 'author___blog_post___childContentfulBlogPostDescriptionTextNode___id'
  | 'author___blog_post___childContentfulBlogPostDescriptionTextNode___children'
  | 'author___blog_post___childContentfulBlogPostDescriptionTextNode___description'
  | 'author___blog_post___childContentfulBlogPostBodyTextNode___id'
  | 'author___blog_post___childContentfulBlogPostBodyTextNode___children'
  | 'author___blog_post___childContentfulBlogPostBodyTextNode___body'
  | 'author___childContentfulPersonShortBioTextNode___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___id'
  | 'author___childContentfulPersonShortBioTextNode___parent___children'
  | 'author___childContentfulPersonShortBioTextNode___children'
  | 'author___childContentfulPersonShortBioTextNode___children___id'
  | 'author___childContentfulPersonShortBioTextNode___children___children'
  | 'author___childContentfulPersonShortBioTextNode___internal___content'
  | 'author___childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'author___childContentfulPersonShortBioTextNode___internal___description'
  | 'author___childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'author___childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'author___childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'author___childContentfulPersonShortBioTextNode___internal___owner'
  | 'author___childContentfulPersonShortBioTextNode___internal___type'
  | 'author___childContentfulPersonShortBioTextNode___shortBio'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulBlogPostDescriptionTextNode___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___parent___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___parent___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___parent___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___parent___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___children___id'
  | 'childContentfulBlogPostDescriptionTextNode___children___children___children'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___children___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___internal___content'
  | 'childContentfulBlogPostDescriptionTextNode___internal___contentDigest'
  | 'childContentfulBlogPostDescriptionTextNode___internal___description'
  | 'childContentfulBlogPostDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostDescriptionTextNode___internal___ignoreType'
  | 'childContentfulBlogPostDescriptionTextNode___internal___mediaType'
  | 'childContentfulBlogPostDescriptionTextNode___internal___owner'
  | 'childContentfulBlogPostDescriptionTextNode___internal___type'
  | 'childContentfulBlogPostDescriptionTextNode___description'
  | 'childContentfulBlogPostBodyTextNode___id'
  | 'childContentfulBlogPostBodyTextNode___parent___id'
  | 'childContentfulBlogPostBodyTextNode___parent___parent___id'
  | 'childContentfulBlogPostBodyTextNode___parent___parent___children'
  | 'childContentfulBlogPostBodyTextNode___parent___children'
  | 'childContentfulBlogPostBodyTextNode___parent___children___id'
  | 'childContentfulBlogPostBodyTextNode___parent___children___children'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___content'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___description'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___parent___internal___type'
  | 'childContentfulBlogPostBodyTextNode___children'
  | 'childContentfulBlogPostBodyTextNode___children___id'
  | 'childContentfulBlogPostBodyTextNode___children___parent___id'
  | 'childContentfulBlogPostBodyTextNode___children___parent___children'
  | 'childContentfulBlogPostBodyTextNode___children___children'
  | 'childContentfulBlogPostBodyTextNode___children___children___id'
  | 'childContentfulBlogPostBodyTextNode___children___children___children'
  | 'childContentfulBlogPostBodyTextNode___children___internal___content'
  | 'childContentfulBlogPostBodyTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___children___internal___description'
  | 'childContentfulBlogPostBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___children___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___children___internal___type'
  | 'childContentfulBlogPostBodyTextNode___internal___content'
  | 'childContentfulBlogPostBodyTextNode___internal___contentDigest'
  | 'childContentfulBlogPostBodyTextNode___internal___description'
  | 'childContentfulBlogPostBodyTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostBodyTextNode___internal___ignoreType'
  | 'childContentfulBlogPostBodyTextNode___internal___mediaType'
  | 'childContentfulBlogPostBodyTextNode___internal___owner'
  | 'childContentfulBlogPostBodyTextNode___internal___type'
  | 'childContentfulBlogPostBodyTextNode___body';

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulPerson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  jobHistory?: Maybe<Array<Maybe<Scalars['String']>>>;
  skill?: Maybe<Array<Maybe<ContentfulSkill>>>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPersonSys>;
  node_locale?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
};


export type ContentfulPersonCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPersonUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPersonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonGroupConnection>;
};


export type ContentfulPersonConnectionDistinctArgs = {
  field: ContentfulPersonFieldsEnum;
};


export type ContentfulPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonFieldsEnum;
};

export type ContentfulPersonEdge = {
  next?: Maybe<ContentfulPerson>;
  node: ContentfulPerson;
  previous?: Maybe<ContentfulPerson>;
};

export type ContentfulPersonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'birthday'
  | 'jobHistory'
  | 'skill'
  | 'skill___id'
  | 'skill___parent___id'
  | 'skill___parent___parent___id'
  | 'skill___parent___parent___children'
  | 'skill___parent___children'
  | 'skill___parent___children___id'
  | 'skill___parent___children___children'
  | 'skill___parent___internal___content'
  | 'skill___parent___internal___contentDigest'
  | 'skill___parent___internal___description'
  | 'skill___parent___internal___fieldOwners'
  | 'skill___parent___internal___ignoreType'
  | 'skill___parent___internal___mediaType'
  | 'skill___parent___internal___owner'
  | 'skill___parent___internal___type'
  | 'skill___children'
  | 'skill___children___id'
  | 'skill___children___parent___id'
  | 'skill___children___parent___children'
  | 'skill___children___children'
  | 'skill___children___children___id'
  | 'skill___children___children___children'
  | 'skill___children___internal___content'
  | 'skill___children___internal___contentDigest'
  | 'skill___children___internal___description'
  | 'skill___children___internal___fieldOwners'
  | 'skill___children___internal___ignoreType'
  | 'skill___children___internal___mediaType'
  | 'skill___children___internal___owner'
  | 'skill___children___internal___type'
  | 'skill___internal___content'
  | 'skill___internal___contentDigest'
  | 'skill___internal___description'
  | 'skill___internal___fieldOwners'
  | 'skill___internal___ignoreType'
  | 'skill___internal___mediaType'
  | 'skill___internal___owner'
  | 'skill___internal___type'
  | 'skill___name'
  | 'skill___onlyHobby'
  | 'skill___key'
  | 'skill___person'
  | 'skill___person___id'
  | 'skill___person___parent___id'
  | 'skill___person___parent___children'
  | 'skill___person___children'
  | 'skill___person___children___id'
  | 'skill___person___children___children'
  | 'skill___person___internal___content'
  | 'skill___person___internal___contentDigest'
  | 'skill___person___internal___description'
  | 'skill___person___internal___fieldOwners'
  | 'skill___person___internal___ignoreType'
  | 'skill___person___internal___mediaType'
  | 'skill___person___internal___owner'
  | 'skill___person___internal___type'
  | 'skill___person___name'
  | 'skill___person___birthday'
  | 'skill___person___jobHistory'
  | 'skill___person___skill'
  | 'skill___person___skill___id'
  | 'skill___person___skill___children'
  | 'skill___person___skill___name'
  | 'skill___person___skill___onlyHobby'
  | 'skill___person___skill___key'
  | 'skill___person___skill___person'
  | 'skill___person___skill___spaceId'
  | 'skill___person___skill___contentful_id'
  | 'skill___person___skill___createdAt'
  | 'skill___person___skill___updatedAt'
  | 'skill___person___skill___node_locale'
  | 'skill___person___skill___post'
  | 'skill___person___shortBio___id'
  | 'skill___person___shortBio___children'
  | 'skill___person___shortBio___shortBio'
  | 'skill___person___spaceId'
  | 'skill___person___contentful_id'
  | 'skill___person___createdAt'
  | 'skill___person___updatedAt'
  | 'skill___person___sys___revision'
  | 'skill___person___node_locale'
  | 'skill___person___github'
  | 'skill___person___blog_post'
  | 'skill___person___blog_post___id'
  | 'skill___person___blog_post___children'
  | 'skill___person___blog_post___title'
  | 'skill___person___blog_post___slug'
  | 'skill___person___blog_post___publishDate'
  | 'skill___person___blog_post___tags'
  | 'skill___person___blog_post___spaceId'
  | 'skill___person___blog_post___contentful_id'
  | 'skill___person___blog_post___createdAt'
  | 'skill___person___blog_post___updatedAt'
  | 'skill___person___blog_post___node_locale'
  | 'skill___person___childContentfulPersonShortBioTextNode___id'
  | 'skill___person___childContentfulPersonShortBioTextNode___children'
  | 'skill___person___childContentfulPersonShortBioTextNode___shortBio'
  | 'skill___spaceId'
  | 'skill___contentful_id'
  | 'skill___createdAt'
  | 'skill___updatedAt'
  | 'skill___sys___revision'
  | 'skill___node_locale'
  | 'skill___post'
  | 'skill___post___id'
  | 'skill___post___parent___id'
  | 'skill___post___parent___children'
  | 'skill___post___children'
  | 'skill___post___children___id'
  | 'skill___post___children___children'
  | 'skill___post___internal___content'
  | 'skill___post___internal___contentDigest'
  | 'skill___post___internal___description'
  | 'skill___post___internal___fieldOwners'
  | 'skill___post___internal___ignoreType'
  | 'skill___post___internal___mediaType'
  | 'skill___post___internal___owner'
  | 'skill___post___internal___type'
  | 'skill___post___title'
  | 'skill___post___features'
  | 'skill___post___isJob'
  | 'skill___post___video'
  | 'skill___post___links'
  | 'skill___post___isPined'
  | 'skill___post___skills'
  | 'skill___post___skills___id'
  | 'skill___post___skills___children'
  | 'skill___post___skills___name'
  | 'skill___post___skills___onlyHobby'
  | 'skill___post___skills___key'
  | 'skill___post___skills___person'
  | 'skill___post___skills___spaceId'
  | 'skill___post___skills___contentful_id'
  | 'skill___post___skills___createdAt'
  | 'skill___post___skills___updatedAt'
  | 'skill___post___skills___node_locale'
  | 'skill___post___skills___post'
  | 'skill___post___description___id'
  | 'skill___post___description___children'
  | 'skill___post___description___content'
  | 'skill___post___description___nodeType'
  | 'skill___post___description___description'
  | 'skill___post___description___json'
  | 'skill___post___spaceId'
  | 'skill___post___contentful_id'
  | 'skill___post___createdAt'
  | 'skill___post___updatedAt'
  | 'skill___post___sys___revision'
  | 'skill___post___node_locale'
  | 'skill___post___fields___parsedLinks'
  | 'skill___post___img___id'
  | 'skill___post___img___children'
  | 'skill___post___img___contentful_id'
  | 'skill___post___img___title'
  | 'skill___post___img___description'
  | 'skill___post___img___node_locale'
  | 'skill___post___childContentfulPostDescriptionRichTextNode___id'
  | 'skill___post___childContentfulPostDescriptionRichTextNode___children'
  | 'skill___post___childContentfulPostDescriptionRichTextNode___content'
  | 'skill___post___childContentfulPostDescriptionRichTextNode___nodeType'
  | 'skill___post___childContentfulPostDescriptionRichTextNode___description'
  | 'skill___post___childContentfulPostDescriptionRichTextNode___json'
  | 'shortBio___id'
  | 'shortBio___parent___id'
  | 'shortBio___parent___parent___id'
  | 'shortBio___parent___parent___children'
  | 'shortBio___parent___children'
  | 'shortBio___parent___children___id'
  | 'shortBio___parent___children___children'
  | 'shortBio___parent___internal___content'
  | 'shortBio___parent___internal___contentDigest'
  | 'shortBio___parent___internal___description'
  | 'shortBio___parent___internal___fieldOwners'
  | 'shortBio___parent___internal___ignoreType'
  | 'shortBio___parent___internal___mediaType'
  | 'shortBio___parent___internal___owner'
  | 'shortBio___parent___internal___type'
  | 'shortBio___children'
  | 'shortBio___children___id'
  | 'shortBio___children___parent___id'
  | 'shortBio___children___parent___children'
  | 'shortBio___children___children'
  | 'shortBio___children___children___id'
  | 'shortBio___children___children___children'
  | 'shortBio___children___internal___content'
  | 'shortBio___children___internal___contentDigest'
  | 'shortBio___children___internal___description'
  | 'shortBio___children___internal___fieldOwners'
  | 'shortBio___children___internal___ignoreType'
  | 'shortBio___children___internal___mediaType'
  | 'shortBio___children___internal___owner'
  | 'shortBio___children___internal___type'
  | 'shortBio___internal___content'
  | 'shortBio___internal___contentDigest'
  | 'shortBio___internal___description'
  | 'shortBio___internal___fieldOwners'
  | 'shortBio___internal___ignoreType'
  | 'shortBio___internal___mediaType'
  | 'shortBio___internal___owner'
  | 'shortBio___internal___type'
  | 'shortBio___shortBio'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'github'
  | 'blog_post'
  | 'blog_post___id'
  | 'blog_post___parent___id'
  | 'blog_post___parent___parent___id'
  | 'blog_post___parent___parent___children'
  | 'blog_post___parent___children'
  | 'blog_post___parent___children___id'
  | 'blog_post___parent___children___children'
  | 'blog_post___parent___internal___content'
  | 'blog_post___parent___internal___contentDigest'
  | 'blog_post___parent___internal___description'
  | 'blog_post___parent___internal___fieldOwners'
  | 'blog_post___parent___internal___ignoreType'
  | 'blog_post___parent___internal___mediaType'
  | 'blog_post___parent___internal___owner'
  | 'blog_post___parent___internal___type'
  | 'blog_post___children'
  | 'blog_post___children___id'
  | 'blog_post___children___parent___id'
  | 'blog_post___children___parent___children'
  | 'blog_post___children___children'
  | 'blog_post___children___children___id'
  | 'blog_post___children___children___children'
  | 'blog_post___children___internal___content'
  | 'blog_post___children___internal___contentDigest'
  | 'blog_post___children___internal___description'
  | 'blog_post___children___internal___fieldOwners'
  | 'blog_post___children___internal___ignoreType'
  | 'blog_post___children___internal___mediaType'
  | 'blog_post___children___internal___owner'
  | 'blog_post___children___internal___type'
  | 'blog_post___internal___content'
  | 'blog_post___internal___contentDigest'
  | 'blog_post___internal___description'
  | 'blog_post___internal___fieldOwners'
  | 'blog_post___internal___ignoreType'
  | 'blog_post___internal___mediaType'
  | 'blog_post___internal___owner'
  | 'blog_post___internal___type'
  | 'blog_post___title'
  | 'blog_post___slug'
  | 'blog_post___publishDate'
  | 'blog_post___tags'
  | 'blog_post___heroImage___id'
  | 'blog_post___heroImage___parent___id'
  | 'blog_post___heroImage___parent___children'
  | 'blog_post___heroImage___children'
  | 'blog_post___heroImage___children___id'
  | 'blog_post___heroImage___children___children'
  | 'blog_post___heroImage___internal___content'
  | 'blog_post___heroImage___internal___contentDigest'
  | 'blog_post___heroImage___internal___description'
  | 'blog_post___heroImage___internal___fieldOwners'
  | 'blog_post___heroImage___internal___ignoreType'
  | 'blog_post___heroImage___internal___mediaType'
  | 'blog_post___heroImage___internal___owner'
  | 'blog_post___heroImage___internal___type'
  | 'blog_post___heroImage___contentful_id'
  | 'blog_post___heroImage___file___url'
  | 'blog_post___heroImage___file___fileName'
  | 'blog_post___heroImage___file___contentType'
  | 'blog_post___heroImage___title'
  | 'blog_post___heroImage___description'
  | 'blog_post___heroImage___node_locale'
  | 'blog_post___heroImage___fixed___base64'
  | 'blog_post___heroImage___fixed___tracedSVG'
  | 'blog_post___heroImage___fixed___aspectRatio'
  | 'blog_post___heroImage___fixed___width'
  | 'blog_post___heroImage___fixed___height'
  | 'blog_post___heroImage___fixed___src'
  | 'blog_post___heroImage___fixed___srcSet'
  | 'blog_post___heroImage___fixed___srcWebp'
  | 'blog_post___heroImage___fixed___srcSetWebp'
  | 'blog_post___heroImage___resolutions___base64'
  | 'blog_post___heroImage___resolutions___tracedSVG'
  | 'blog_post___heroImage___resolutions___aspectRatio'
  | 'blog_post___heroImage___resolutions___width'
  | 'blog_post___heroImage___resolutions___height'
  | 'blog_post___heroImage___resolutions___src'
  | 'blog_post___heroImage___resolutions___srcSet'
  | 'blog_post___heroImage___resolutions___srcWebp'
  | 'blog_post___heroImage___resolutions___srcSetWebp'
  | 'blog_post___heroImage___fluid___base64'
  | 'blog_post___heroImage___fluid___tracedSVG'
  | 'blog_post___heroImage___fluid___aspectRatio'
  | 'blog_post___heroImage___fluid___src'
  | 'blog_post___heroImage___fluid___srcSet'
  | 'blog_post___heroImage___fluid___srcWebp'
  | 'blog_post___heroImage___fluid___srcSetWebp'
  | 'blog_post___heroImage___fluid___sizes'
  | 'blog_post___heroImage___sizes___base64'
  | 'blog_post___heroImage___sizes___tracedSVG'
  | 'blog_post___heroImage___sizes___aspectRatio'
  | 'blog_post___heroImage___sizes___src'
  | 'blog_post___heroImage___sizes___srcSet'
  | 'blog_post___heroImage___sizes___srcWebp'
  | 'blog_post___heroImage___sizes___srcSetWebp'
  | 'blog_post___heroImage___sizes___sizes'
  | 'blog_post___heroImage___resize___base64'
  | 'blog_post___heroImage___resize___tracedSVG'
  | 'blog_post___heroImage___resize___src'
  | 'blog_post___heroImage___resize___width'
  | 'blog_post___heroImage___resize___height'
  | 'blog_post___heroImage___resize___aspectRatio'
  | 'blog_post___author___id'
  | 'blog_post___author___parent___id'
  | 'blog_post___author___parent___children'
  | 'blog_post___author___children'
  | 'blog_post___author___children___id'
  | 'blog_post___author___children___children'
  | 'blog_post___author___internal___content'
  | 'blog_post___author___internal___contentDigest'
  | 'blog_post___author___internal___description'
  | 'blog_post___author___internal___fieldOwners'
  | 'blog_post___author___internal___ignoreType'
  | 'blog_post___author___internal___mediaType'
  | 'blog_post___author___internal___owner'
  | 'blog_post___author___internal___type'
  | 'blog_post___author___name'
  | 'blog_post___author___birthday'
  | 'blog_post___author___jobHistory'
  | 'blog_post___author___skill'
  | 'blog_post___author___skill___id'
  | 'blog_post___author___skill___children'
  | 'blog_post___author___skill___name'
  | 'blog_post___author___skill___onlyHobby'
  | 'blog_post___author___skill___key'
  | 'blog_post___author___skill___person'
  | 'blog_post___author___skill___spaceId'
  | 'blog_post___author___skill___contentful_id'
  | 'blog_post___author___skill___createdAt'
  | 'blog_post___author___skill___updatedAt'
  | 'blog_post___author___skill___node_locale'
  | 'blog_post___author___skill___post'
  | 'blog_post___author___shortBio___id'
  | 'blog_post___author___shortBio___children'
  | 'blog_post___author___shortBio___shortBio'
  | 'blog_post___author___spaceId'
  | 'blog_post___author___contentful_id'
  | 'blog_post___author___createdAt'
  | 'blog_post___author___updatedAt'
  | 'blog_post___author___sys___revision'
  | 'blog_post___author___node_locale'
  | 'blog_post___author___github'
  | 'blog_post___author___blog_post'
  | 'blog_post___author___blog_post___id'
  | 'blog_post___author___blog_post___children'
  | 'blog_post___author___blog_post___title'
  | 'blog_post___author___blog_post___slug'
  | 'blog_post___author___blog_post___publishDate'
  | 'blog_post___author___blog_post___tags'
  | 'blog_post___author___blog_post___spaceId'
  | 'blog_post___author___blog_post___contentful_id'
  | 'blog_post___author___blog_post___createdAt'
  | 'blog_post___author___blog_post___updatedAt'
  | 'blog_post___author___blog_post___node_locale'
  | 'blog_post___author___childContentfulPersonShortBioTextNode___id'
  | 'blog_post___author___childContentfulPersonShortBioTextNode___children'
  | 'blog_post___author___childContentfulPersonShortBioTextNode___shortBio'
  | 'blog_post___description___id'
  | 'blog_post___description___parent___id'
  | 'blog_post___description___parent___children'
  | 'blog_post___description___children'
  | 'blog_post___description___children___id'
  | 'blog_post___description___children___children'
  | 'blog_post___description___internal___content'
  | 'blog_post___description___internal___contentDigest'
  | 'blog_post___description___internal___description'
  | 'blog_post___description___internal___fieldOwners'
  | 'blog_post___description___internal___ignoreType'
  | 'blog_post___description___internal___mediaType'
  | 'blog_post___description___internal___owner'
  | 'blog_post___description___internal___type'
  | 'blog_post___description___description'
  | 'blog_post___body___id'
  | 'blog_post___body___parent___id'
  | 'blog_post___body___parent___children'
  | 'blog_post___body___children'
  | 'blog_post___body___children___id'
  | 'blog_post___body___children___children'
  | 'blog_post___body___internal___content'
  | 'blog_post___body___internal___contentDigest'
  | 'blog_post___body___internal___description'
  | 'blog_post___body___internal___fieldOwners'
  | 'blog_post___body___internal___ignoreType'
  | 'blog_post___body___internal___mediaType'
  | 'blog_post___body___internal___owner'
  | 'blog_post___body___internal___type'
  | 'blog_post___body___body'
  | 'blog_post___spaceId'
  | 'blog_post___contentful_id'
  | 'blog_post___createdAt'
  | 'blog_post___updatedAt'
  | 'blog_post___sys___revision'
  | 'blog_post___node_locale'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___id'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___parent___id'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___parent___children'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___children'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___children___id'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___children___children'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___content'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___contentDigest'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___description'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___ignoreType'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___mediaType'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___owner'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___internal___type'
  | 'blog_post___childContentfulBlogPostDescriptionTextNode___description'
  | 'blog_post___childContentfulBlogPostBodyTextNode___id'
  | 'blog_post___childContentfulBlogPostBodyTextNode___parent___id'
  | 'blog_post___childContentfulBlogPostBodyTextNode___parent___children'
  | 'blog_post___childContentfulBlogPostBodyTextNode___children'
  | 'blog_post___childContentfulBlogPostBodyTextNode___children___id'
  | 'blog_post___childContentfulBlogPostBodyTextNode___children___children'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___content'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___contentDigest'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___description'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___fieldOwners'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___ignoreType'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___mediaType'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___owner'
  | 'blog_post___childContentfulBlogPostBodyTextNode___internal___type'
  | 'blog_post___childContentfulBlogPostBodyTextNode___body'
  | 'childContentfulPersonShortBioTextNode___id'
  | 'childContentfulPersonShortBioTextNode___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___id'
  | 'childContentfulPersonShortBioTextNode___parent___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children'
  | 'childContentfulPersonShortBioTextNode___parent___children___id'
  | 'childContentfulPersonShortBioTextNode___parent___children___children'
  | 'childContentfulPersonShortBioTextNode___parent___internal___content'
  | 'childContentfulPersonShortBioTextNode___parent___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___parent___internal___description'
  | 'childContentfulPersonShortBioTextNode___parent___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___parent___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___parent___internal___owner'
  | 'childContentfulPersonShortBioTextNode___parent___internal___type'
  | 'childContentfulPersonShortBioTextNode___children'
  | 'childContentfulPersonShortBioTextNode___children___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___id'
  | 'childContentfulPersonShortBioTextNode___children___parent___children'
  | 'childContentfulPersonShortBioTextNode___children___children'
  | 'childContentfulPersonShortBioTextNode___children___children___id'
  | 'childContentfulPersonShortBioTextNode___children___children___children'
  | 'childContentfulPersonShortBioTextNode___children___internal___content'
  | 'childContentfulPersonShortBioTextNode___children___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___children___internal___description'
  | 'childContentfulPersonShortBioTextNode___children___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___children___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___children___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___children___internal___owner'
  | 'childContentfulPersonShortBioTextNode___children___internal___type'
  | 'childContentfulPersonShortBioTextNode___internal___content'
  | 'childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'childContentfulPersonShortBioTextNode___internal___description'
  | 'childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'childContentfulPersonShortBioTextNode___internal___owner'
  | 'childContentfulPersonShortBioTextNode___internal___type'
  | 'childContentfulPersonShortBioTextNode___shortBio';

export type ContentfulPersonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  birthday?: Maybe<StringQueryOperatorInput>;
  jobHistory?: Maybe<StringQueryOperatorInput>;
  skill?: Maybe<ContentfulSkillFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};

export type ContentfulPersonFilterListInput = {
  elemMatch?: Maybe<ContentfulPersonFilterInput>;
};

export type ContentfulPersonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonEdge>;
  nodes: Array<ContentfulPerson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  shortBio?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPersonShortBioTextNodeGroupConnection>;
};


export type ContentfulPersonShortBioTextNodeConnectionDistinctArgs = {
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};


export type ContentfulPersonShortBioTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPersonShortBioTextNodeFieldsEnum;
};

export type ContentfulPersonShortBioTextNodeEdge = {
  next?: Maybe<ContentfulPersonShortBioTextNode>;
  node: ContentfulPersonShortBioTextNode;
  previous?: Maybe<ContentfulPersonShortBioTextNode>;
};

export type ContentfulPersonShortBioTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'shortBio';

export type ContentfulPersonShortBioTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPersonShortBioTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPersonShortBioTextNodeEdge>;
  nodes: Array<ContentfulPersonShortBioTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPersonShortBioTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonShortBioTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPersonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPersonSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPersonSysContentType>;
};

export type ContentfulPersonSysContentType = {
  sys?: Maybe<ContentfulPersonSysContentTypeSys>;
};

export type ContentfulPersonSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPersonSysContentTypeSysFilterInput>;
};

export type ContentfulPersonSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPersonSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPersonSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPersonSysContentTypeFilterInput>;
};

export type ContentfulPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  isJob?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  isPined?: Maybe<Scalars['Boolean']>;
  skills?: Maybe<Array<Maybe<ContentfulSkill>>>;
  description?: Maybe<ContentfulPostDescriptionRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  fields?: Maybe<ContentfulPostFields>;
  img?: Maybe<ContentfulAsset>;
  childContentfulPostDescriptionRichTextNode?: Maybe<ContentfulPostDescriptionRichTextNode>;
};


export type ContentfulPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostGroupConnection>;
};


export type ContentfulPostConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostDescriptionRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulPostDescriptionRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
  childContentfulRichText?: Maybe<ContentfulRichText>;
};

export type ContentfulPostDescriptionRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulPostDescriptionRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostDescriptionRichTextNodeGroupConnection>;
};


export type ContentfulPostDescriptionRichTextNodeConnectionDistinctArgs = {
  field: ContentfulPostDescriptionRichTextNodeFieldsEnum;
};


export type ContentfulPostDescriptionRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostDescriptionRichTextNodeFieldsEnum;
};

export type ContentfulPostDescriptionRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulPostDescriptionRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulPostDescriptionRichTextNodeContentContent = {
  data?: Maybe<ContentfulPostDescriptionRichTextNodeContentContentData>;
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulPostDescriptionRichTextNodeContentContentContent>>>;
};

export type ContentfulPostDescriptionRichTextNodeContentContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulPostDescriptionRichTextNodeContentContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostDescriptionRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulPostDescriptionRichTextNodeContentContentContentFilterInput>;
};

export type ContentfulPostDescriptionRichTextNodeContentContentData = {
  uri?: Maybe<Scalars['String']>;
};

export type ContentfulPostDescriptionRichTextNodeContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostDescriptionRichTextNodeContentContentFilterInput = {
  data?: Maybe<ContentfulPostDescriptionRichTextNodeContentContentDataFilterInput>;
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulPostDescriptionRichTextNodeContentContentContentFilterListInput>;
};

export type ContentfulPostDescriptionRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulPostDescriptionRichTextNodeContentContentFilterInput>;
};

export type ContentfulPostDescriptionRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulPostDescriptionRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostDescriptionRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulPostDescriptionRichTextNodeContentFilterInput>;
};

export type ContentfulPostDescriptionRichTextNodeEdge = {
  next?: Maybe<ContentfulPostDescriptionRichTextNode>;
  node: ContentfulPostDescriptionRichTextNode;
  previous?: Maybe<ContentfulPostDescriptionRichTextNode>;
};

export type ContentfulPostDescriptionRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___data___uri'
  | 'content___content___value'
  | 'content___content___nodeType'
  | 'content___content___content'
  | 'content___content___content___value'
  | 'content___content___content___nodeType'
  | 'content___nodeType'
  | 'nodeType'
  | 'description'
  | 'json'
  | 'childContentfulRichText___id'
  | 'childContentfulRichText___parent___id'
  | 'childContentfulRichText___parent___parent___id'
  | 'childContentfulRichText___parent___parent___children'
  | 'childContentfulRichText___parent___children'
  | 'childContentfulRichText___parent___children___id'
  | 'childContentfulRichText___parent___children___children'
  | 'childContentfulRichText___parent___internal___content'
  | 'childContentfulRichText___parent___internal___contentDigest'
  | 'childContentfulRichText___parent___internal___description'
  | 'childContentfulRichText___parent___internal___fieldOwners'
  | 'childContentfulRichText___parent___internal___ignoreType'
  | 'childContentfulRichText___parent___internal___mediaType'
  | 'childContentfulRichText___parent___internal___owner'
  | 'childContentfulRichText___parent___internal___type'
  | 'childContentfulRichText___children'
  | 'childContentfulRichText___children___id'
  | 'childContentfulRichText___children___parent___id'
  | 'childContentfulRichText___children___parent___children'
  | 'childContentfulRichText___children___children'
  | 'childContentfulRichText___children___children___id'
  | 'childContentfulRichText___children___children___children'
  | 'childContentfulRichText___children___internal___content'
  | 'childContentfulRichText___children___internal___contentDigest'
  | 'childContentfulRichText___children___internal___description'
  | 'childContentfulRichText___children___internal___fieldOwners'
  | 'childContentfulRichText___children___internal___ignoreType'
  | 'childContentfulRichText___children___internal___mediaType'
  | 'childContentfulRichText___children___internal___owner'
  | 'childContentfulRichText___children___internal___type'
  | 'childContentfulRichText___internal___content'
  | 'childContentfulRichText___internal___contentDigest'
  | 'childContentfulRichText___internal___description'
  | 'childContentfulRichText___internal___fieldOwners'
  | 'childContentfulRichText___internal___ignoreType'
  | 'childContentfulRichText___internal___mediaType'
  | 'childContentfulRichText___internal___owner'
  | 'childContentfulRichText___internal___type'
  | 'childContentfulRichText___html'
  | 'childContentfulRichText___timeToRead';

export type ContentfulPostDescriptionRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulPostDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
  childContentfulRichText?: Maybe<ContentfulRichTextFilterInput>;
};

export type ContentfulPostDescriptionRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostDescriptionRichTextNodeEdge>;
  nodes: Array<ContentfulPostDescriptionRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostDescriptionRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostDescriptionRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostEdge = {
  next?: Maybe<ContentfulPost>;
  node: ContentfulPost;
  previous?: Maybe<ContentfulPost>;
};

export type ContentfulPostFields = {
  parsedLinks?: Maybe<Array<Maybe<ContentfulPostFieldsParsedLinks>>>;
};

export type ContentfulPostFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'features'
  | 'isJob'
  | 'video'
  | 'links'
  | 'isPined'
  | 'skills'
  | 'skills___id'
  | 'skills___parent___id'
  | 'skills___parent___parent___id'
  | 'skills___parent___parent___children'
  | 'skills___parent___children'
  | 'skills___parent___children___id'
  | 'skills___parent___children___children'
  | 'skills___parent___internal___content'
  | 'skills___parent___internal___contentDigest'
  | 'skills___parent___internal___description'
  | 'skills___parent___internal___fieldOwners'
  | 'skills___parent___internal___ignoreType'
  | 'skills___parent___internal___mediaType'
  | 'skills___parent___internal___owner'
  | 'skills___parent___internal___type'
  | 'skills___children'
  | 'skills___children___id'
  | 'skills___children___parent___id'
  | 'skills___children___parent___children'
  | 'skills___children___children'
  | 'skills___children___children___id'
  | 'skills___children___children___children'
  | 'skills___children___internal___content'
  | 'skills___children___internal___contentDigest'
  | 'skills___children___internal___description'
  | 'skills___children___internal___fieldOwners'
  | 'skills___children___internal___ignoreType'
  | 'skills___children___internal___mediaType'
  | 'skills___children___internal___owner'
  | 'skills___children___internal___type'
  | 'skills___internal___content'
  | 'skills___internal___contentDigest'
  | 'skills___internal___description'
  | 'skills___internal___fieldOwners'
  | 'skills___internal___ignoreType'
  | 'skills___internal___mediaType'
  | 'skills___internal___owner'
  | 'skills___internal___type'
  | 'skills___name'
  | 'skills___onlyHobby'
  | 'skills___key'
  | 'skills___person'
  | 'skills___person___id'
  | 'skills___person___parent___id'
  | 'skills___person___parent___children'
  | 'skills___person___children'
  | 'skills___person___children___id'
  | 'skills___person___children___children'
  | 'skills___person___internal___content'
  | 'skills___person___internal___contentDigest'
  | 'skills___person___internal___description'
  | 'skills___person___internal___fieldOwners'
  | 'skills___person___internal___ignoreType'
  | 'skills___person___internal___mediaType'
  | 'skills___person___internal___owner'
  | 'skills___person___internal___type'
  | 'skills___person___name'
  | 'skills___person___birthday'
  | 'skills___person___jobHistory'
  | 'skills___person___skill'
  | 'skills___person___skill___id'
  | 'skills___person___skill___children'
  | 'skills___person___skill___name'
  | 'skills___person___skill___onlyHobby'
  | 'skills___person___skill___key'
  | 'skills___person___skill___person'
  | 'skills___person___skill___spaceId'
  | 'skills___person___skill___contentful_id'
  | 'skills___person___skill___createdAt'
  | 'skills___person___skill___updatedAt'
  | 'skills___person___skill___node_locale'
  | 'skills___person___skill___post'
  | 'skills___person___shortBio___id'
  | 'skills___person___shortBio___children'
  | 'skills___person___shortBio___shortBio'
  | 'skills___person___spaceId'
  | 'skills___person___contentful_id'
  | 'skills___person___createdAt'
  | 'skills___person___updatedAt'
  | 'skills___person___sys___revision'
  | 'skills___person___node_locale'
  | 'skills___person___github'
  | 'skills___person___blog_post'
  | 'skills___person___blog_post___id'
  | 'skills___person___blog_post___children'
  | 'skills___person___blog_post___title'
  | 'skills___person___blog_post___slug'
  | 'skills___person___blog_post___publishDate'
  | 'skills___person___blog_post___tags'
  | 'skills___person___blog_post___spaceId'
  | 'skills___person___blog_post___contentful_id'
  | 'skills___person___blog_post___createdAt'
  | 'skills___person___blog_post___updatedAt'
  | 'skills___person___blog_post___node_locale'
  | 'skills___person___childContentfulPersonShortBioTextNode___id'
  | 'skills___person___childContentfulPersonShortBioTextNode___children'
  | 'skills___person___childContentfulPersonShortBioTextNode___shortBio'
  | 'skills___spaceId'
  | 'skills___contentful_id'
  | 'skills___createdAt'
  | 'skills___updatedAt'
  | 'skills___sys___revision'
  | 'skills___node_locale'
  | 'skills___post'
  | 'skills___post___id'
  | 'skills___post___parent___id'
  | 'skills___post___parent___children'
  | 'skills___post___children'
  | 'skills___post___children___id'
  | 'skills___post___children___children'
  | 'skills___post___internal___content'
  | 'skills___post___internal___contentDigest'
  | 'skills___post___internal___description'
  | 'skills___post___internal___fieldOwners'
  | 'skills___post___internal___ignoreType'
  | 'skills___post___internal___mediaType'
  | 'skills___post___internal___owner'
  | 'skills___post___internal___type'
  | 'skills___post___title'
  | 'skills___post___features'
  | 'skills___post___isJob'
  | 'skills___post___video'
  | 'skills___post___links'
  | 'skills___post___isPined'
  | 'skills___post___skills'
  | 'skills___post___skills___id'
  | 'skills___post___skills___children'
  | 'skills___post___skills___name'
  | 'skills___post___skills___onlyHobby'
  | 'skills___post___skills___key'
  | 'skills___post___skills___person'
  | 'skills___post___skills___spaceId'
  | 'skills___post___skills___contentful_id'
  | 'skills___post___skills___createdAt'
  | 'skills___post___skills___updatedAt'
  | 'skills___post___skills___node_locale'
  | 'skills___post___skills___post'
  | 'skills___post___description___id'
  | 'skills___post___description___children'
  | 'skills___post___description___content'
  | 'skills___post___description___nodeType'
  | 'skills___post___description___description'
  | 'skills___post___description___json'
  | 'skills___post___spaceId'
  | 'skills___post___contentful_id'
  | 'skills___post___createdAt'
  | 'skills___post___updatedAt'
  | 'skills___post___sys___revision'
  | 'skills___post___node_locale'
  | 'skills___post___fields___parsedLinks'
  | 'skills___post___img___id'
  | 'skills___post___img___children'
  | 'skills___post___img___contentful_id'
  | 'skills___post___img___title'
  | 'skills___post___img___description'
  | 'skills___post___img___node_locale'
  | 'skills___post___childContentfulPostDescriptionRichTextNode___id'
  | 'skills___post___childContentfulPostDescriptionRichTextNode___children'
  | 'skills___post___childContentfulPostDescriptionRichTextNode___content'
  | 'skills___post___childContentfulPostDescriptionRichTextNode___nodeType'
  | 'skills___post___childContentfulPostDescriptionRichTextNode___description'
  | 'skills___post___childContentfulPostDescriptionRichTextNode___json'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___content'
  | 'description___content___content'
  | 'description___content___content___value'
  | 'description___content___content___nodeType'
  | 'description___content___content___content'
  | 'description___content___nodeType'
  | 'description___nodeType'
  | 'description___description'
  | 'description___json'
  | 'description___childContentfulRichText___id'
  | 'description___childContentfulRichText___parent___id'
  | 'description___childContentfulRichText___parent___children'
  | 'description___childContentfulRichText___children'
  | 'description___childContentfulRichText___children___id'
  | 'description___childContentfulRichText___children___children'
  | 'description___childContentfulRichText___internal___content'
  | 'description___childContentfulRichText___internal___contentDigest'
  | 'description___childContentfulRichText___internal___description'
  | 'description___childContentfulRichText___internal___fieldOwners'
  | 'description___childContentfulRichText___internal___ignoreType'
  | 'description___childContentfulRichText___internal___mediaType'
  | 'description___childContentfulRichText___internal___owner'
  | 'description___childContentfulRichText___internal___type'
  | 'description___childContentfulRichText___html'
  | 'description___childContentfulRichText___timeToRead'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'fields___parsedLinks'
  | 'fields___parsedLinks___link'
  | 'fields___parsedLinks___value'
  | 'img___id'
  | 'img___parent___id'
  | 'img___parent___parent___id'
  | 'img___parent___parent___children'
  | 'img___parent___children'
  | 'img___parent___children___id'
  | 'img___parent___children___children'
  | 'img___parent___internal___content'
  | 'img___parent___internal___contentDigest'
  | 'img___parent___internal___description'
  | 'img___parent___internal___fieldOwners'
  | 'img___parent___internal___ignoreType'
  | 'img___parent___internal___mediaType'
  | 'img___parent___internal___owner'
  | 'img___parent___internal___type'
  | 'img___children'
  | 'img___children___id'
  | 'img___children___parent___id'
  | 'img___children___parent___children'
  | 'img___children___children'
  | 'img___children___children___id'
  | 'img___children___children___children'
  | 'img___children___internal___content'
  | 'img___children___internal___contentDigest'
  | 'img___children___internal___description'
  | 'img___children___internal___fieldOwners'
  | 'img___children___internal___ignoreType'
  | 'img___children___internal___mediaType'
  | 'img___children___internal___owner'
  | 'img___children___internal___type'
  | 'img___internal___content'
  | 'img___internal___contentDigest'
  | 'img___internal___description'
  | 'img___internal___fieldOwners'
  | 'img___internal___ignoreType'
  | 'img___internal___mediaType'
  | 'img___internal___owner'
  | 'img___internal___type'
  | 'img___contentful_id'
  | 'img___file___url'
  | 'img___file___details___size'
  | 'img___file___fileName'
  | 'img___file___contentType'
  | 'img___title'
  | 'img___description'
  | 'img___node_locale'
  | 'img___fixed___base64'
  | 'img___fixed___tracedSVG'
  | 'img___fixed___aspectRatio'
  | 'img___fixed___width'
  | 'img___fixed___height'
  | 'img___fixed___src'
  | 'img___fixed___srcSet'
  | 'img___fixed___srcWebp'
  | 'img___fixed___srcSetWebp'
  | 'img___resolutions___base64'
  | 'img___resolutions___tracedSVG'
  | 'img___resolutions___aspectRatio'
  | 'img___resolutions___width'
  | 'img___resolutions___height'
  | 'img___resolutions___src'
  | 'img___resolutions___srcSet'
  | 'img___resolutions___srcWebp'
  | 'img___resolutions___srcSetWebp'
  | 'img___fluid___base64'
  | 'img___fluid___tracedSVG'
  | 'img___fluid___aspectRatio'
  | 'img___fluid___src'
  | 'img___fluid___srcSet'
  | 'img___fluid___srcWebp'
  | 'img___fluid___srcSetWebp'
  | 'img___fluid___sizes'
  | 'img___sizes___base64'
  | 'img___sizes___tracedSVG'
  | 'img___sizes___aspectRatio'
  | 'img___sizes___src'
  | 'img___sizes___srcSet'
  | 'img___sizes___srcWebp'
  | 'img___sizes___srcSetWebp'
  | 'img___sizes___sizes'
  | 'img___resize___base64'
  | 'img___resize___tracedSVG'
  | 'img___resize___src'
  | 'img___resize___width'
  | 'img___resize___height'
  | 'img___resize___aspectRatio'
  | 'childContentfulPostDescriptionRichTextNode___id'
  | 'childContentfulPostDescriptionRichTextNode___parent___id'
  | 'childContentfulPostDescriptionRichTextNode___parent___parent___id'
  | 'childContentfulPostDescriptionRichTextNode___parent___parent___children'
  | 'childContentfulPostDescriptionRichTextNode___parent___children'
  | 'childContentfulPostDescriptionRichTextNode___parent___children___id'
  | 'childContentfulPostDescriptionRichTextNode___parent___children___children'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___content'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___contentDigest'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___description'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___ignoreType'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___mediaType'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___owner'
  | 'childContentfulPostDescriptionRichTextNode___parent___internal___type'
  | 'childContentfulPostDescriptionRichTextNode___children'
  | 'childContentfulPostDescriptionRichTextNode___children___id'
  | 'childContentfulPostDescriptionRichTextNode___children___parent___id'
  | 'childContentfulPostDescriptionRichTextNode___children___parent___children'
  | 'childContentfulPostDescriptionRichTextNode___children___children'
  | 'childContentfulPostDescriptionRichTextNode___children___children___id'
  | 'childContentfulPostDescriptionRichTextNode___children___children___children'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___content'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___contentDigest'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___description'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___fieldOwners'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___ignoreType'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___mediaType'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___owner'
  | 'childContentfulPostDescriptionRichTextNode___children___internal___type'
  | 'childContentfulPostDescriptionRichTextNode___internal___content'
  | 'childContentfulPostDescriptionRichTextNode___internal___contentDigest'
  | 'childContentfulPostDescriptionRichTextNode___internal___description'
  | 'childContentfulPostDescriptionRichTextNode___internal___fieldOwners'
  | 'childContentfulPostDescriptionRichTextNode___internal___ignoreType'
  | 'childContentfulPostDescriptionRichTextNode___internal___mediaType'
  | 'childContentfulPostDescriptionRichTextNode___internal___owner'
  | 'childContentfulPostDescriptionRichTextNode___internal___type'
  | 'childContentfulPostDescriptionRichTextNode___content'
  | 'childContentfulPostDescriptionRichTextNode___content___content'
  | 'childContentfulPostDescriptionRichTextNode___content___content___value'
  | 'childContentfulPostDescriptionRichTextNode___content___content___nodeType'
  | 'childContentfulPostDescriptionRichTextNode___content___content___content'
  | 'childContentfulPostDescriptionRichTextNode___content___nodeType'
  | 'childContentfulPostDescriptionRichTextNode___nodeType'
  | 'childContentfulPostDescriptionRichTextNode___description'
  | 'childContentfulPostDescriptionRichTextNode___json'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___id'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___parent___id'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___parent___children'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___children'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___children___id'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___children___children'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___content'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___contentDigest'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___description'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___fieldOwners'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___ignoreType'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___mediaType'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___owner'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___internal___type'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___html'
  | 'childContentfulPostDescriptionRichTextNode___childContentfulRichText___timeToRead';

export type ContentfulPostFieldsFilterInput = {
  parsedLinks?: Maybe<ContentfulPostFieldsParsedLinksFilterListInput>;
};

export type ContentfulPostFieldsParsedLinks = {
  link?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ContentfulPostFieldsParsedLinksFilterInput = {
  link?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostFieldsParsedLinksFilterListInput = {
  elemMatch?: Maybe<ContentfulPostFieldsParsedLinksFilterInput>;
};

export type ContentfulPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  features?: Maybe<StringQueryOperatorInput>;
  isJob?: Maybe<BooleanQueryOperatorInput>;
  video?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StringQueryOperatorInput>;
  isPined?: Maybe<BooleanQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  description?: Maybe<ContentfulPostDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulPostFieldsFilterInput>;
  img?: Maybe<ContentfulAssetFilterInput>;
  childContentfulPostDescriptionRichTextNode?: Maybe<ContentfulPostDescriptionRichTextNodeFilterInput>;
};

export type ContentfulPostFilterListInput = {
  elemMatch?: Maybe<ContentfulPostFilterInput>;
};

export type ContentfulPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPostSysContentType>;
};

export type ContentfulPostSysContentType = {
  sys?: Maybe<ContentfulPostSysContentTypeSys>;
};

export type ContentfulPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

export type ContentfulPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPostSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulRichText = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  html?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
};

export type ContentfulRichTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulRichTextEdge>;
  nodes: Array<ContentfulRichText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulRichTextGroupConnection>;
};


export type ContentfulRichTextConnectionDistinctArgs = {
  field: ContentfulRichTextFieldsEnum;
};


export type ContentfulRichTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulRichTextFieldsEnum;
};

export type ContentfulRichTextEdge = {
  next?: Maybe<ContentfulRichText>;
  node: ContentfulRichText;
  previous?: Maybe<ContentfulRichText>;
};

export type ContentfulRichTextFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'html'
  | 'timeToRead';

export type ContentfulRichTextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulRichTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulRichTextEdge>;
  nodes: Array<ContentfulRichText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulRichTextSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulRichTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkill = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  onlyHobby?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  person?: Maybe<Array<Maybe<ContentfulPerson>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSkillSys>;
  node_locale?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Maybe<ContentfulPost>>>;
};


export type ContentfulSkillCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSkillUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSkillConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSkillGroupConnection>;
};


export type ContentfulSkillConnectionDistinctArgs = {
  field: ContentfulSkillFieldsEnum;
};


export type ContentfulSkillConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSkillFieldsEnum;
};

export type ContentfulSkillEdge = {
  next?: Maybe<ContentfulSkill>;
  node: ContentfulSkill;
  previous?: Maybe<ContentfulSkill>;
};

export type ContentfulSkillFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'onlyHobby'
  | 'key'
  | 'person'
  | 'person___id'
  | 'person___parent___id'
  | 'person___parent___parent___id'
  | 'person___parent___parent___children'
  | 'person___parent___children'
  | 'person___parent___children___id'
  | 'person___parent___children___children'
  | 'person___parent___internal___content'
  | 'person___parent___internal___contentDigest'
  | 'person___parent___internal___description'
  | 'person___parent___internal___fieldOwners'
  | 'person___parent___internal___ignoreType'
  | 'person___parent___internal___mediaType'
  | 'person___parent___internal___owner'
  | 'person___parent___internal___type'
  | 'person___children'
  | 'person___children___id'
  | 'person___children___parent___id'
  | 'person___children___parent___children'
  | 'person___children___children'
  | 'person___children___children___id'
  | 'person___children___children___children'
  | 'person___children___internal___content'
  | 'person___children___internal___contentDigest'
  | 'person___children___internal___description'
  | 'person___children___internal___fieldOwners'
  | 'person___children___internal___ignoreType'
  | 'person___children___internal___mediaType'
  | 'person___children___internal___owner'
  | 'person___children___internal___type'
  | 'person___internal___content'
  | 'person___internal___contentDigest'
  | 'person___internal___description'
  | 'person___internal___fieldOwners'
  | 'person___internal___ignoreType'
  | 'person___internal___mediaType'
  | 'person___internal___owner'
  | 'person___internal___type'
  | 'person___name'
  | 'person___birthday'
  | 'person___jobHistory'
  | 'person___skill'
  | 'person___skill___id'
  | 'person___skill___parent___id'
  | 'person___skill___parent___children'
  | 'person___skill___children'
  | 'person___skill___children___id'
  | 'person___skill___children___children'
  | 'person___skill___internal___content'
  | 'person___skill___internal___contentDigest'
  | 'person___skill___internal___description'
  | 'person___skill___internal___fieldOwners'
  | 'person___skill___internal___ignoreType'
  | 'person___skill___internal___mediaType'
  | 'person___skill___internal___owner'
  | 'person___skill___internal___type'
  | 'person___skill___name'
  | 'person___skill___onlyHobby'
  | 'person___skill___key'
  | 'person___skill___person'
  | 'person___skill___person___id'
  | 'person___skill___person___children'
  | 'person___skill___person___name'
  | 'person___skill___person___birthday'
  | 'person___skill___person___jobHistory'
  | 'person___skill___person___skill'
  | 'person___skill___person___spaceId'
  | 'person___skill___person___contentful_id'
  | 'person___skill___person___createdAt'
  | 'person___skill___person___updatedAt'
  | 'person___skill___person___node_locale'
  | 'person___skill___person___github'
  | 'person___skill___person___blog_post'
  | 'person___skill___spaceId'
  | 'person___skill___contentful_id'
  | 'person___skill___createdAt'
  | 'person___skill___updatedAt'
  | 'person___skill___sys___revision'
  | 'person___skill___node_locale'
  | 'person___skill___post'
  | 'person___skill___post___id'
  | 'person___skill___post___children'
  | 'person___skill___post___title'
  | 'person___skill___post___features'
  | 'person___skill___post___isJob'
  | 'person___skill___post___video'
  | 'person___skill___post___links'
  | 'person___skill___post___isPined'
  | 'person___skill___post___skills'
  | 'person___skill___post___spaceId'
  | 'person___skill___post___contentful_id'
  | 'person___skill___post___createdAt'
  | 'person___skill___post___updatedAt'
  | 'person___skill___post___node_locale'
  | 'person___shortBio___id'
  | 'person___shortBio___parent___id'
  | 'person___shortBio___parent___children'
  | 'person___shortBio___children'
  | 'person___shortBio___children___id'
  | 'person___shortBio___children___children'
  | 'person___shortBio___internal___content'
  | 'person___shortBio___internal___contentDigest'
  | 'person___shortBio___internal___description'
  | 'person___shortBio___internal___fieldOwners'
  | 'person___shortBio___internal___ignoreType'
  | 'person___shortBio___internal___mediaType'
  | 'person___shortBio___internal___owner'
  | 'person___shortBio___internal___type'
  | 'person___shortBio___shortBio'
  | 'person___spaceId'
  | 'person___contentful_id'
  | 'person___createdAt'
  | 'person___updatedAt'
  | 'person___sys___revision'
  | 'person___node_locale'
  | 'person___github'
  | 'person___blog_post'
  | 'person___blog_post___id'
  | 'person___blog_post___parent___id'
  | 'person___blog_post___parent___children'
  | 'person___blog_post___children'
  | 'person___blog_post___children___id'
  | 'person___blog_post___children___children'
  | 'person___blog_post___internal___content'
  | 'person___blog_post___internal___contentDigest'
  | 'person___blog_post___internal___description'
  | 'person___blog_post___internal___fieldOwners'
  | 'person___blog_post___internal___ignoreType'
  | 'person___blog_post___internal___mediaType'
  | 'person___blog_post___internal___owner'
  | 'person___blog_post___internal___type'
  | 'person___blog_post___title'
  | 'person___blog_post___slug'
  | 'person___blog_post___publishDate'
  | 'person___blog_post___tags'
  | 'person___blog_post___heroImage___id'
  | 'person___blog_post___heroImage___children'
  | 'person___blog_post___heroImage___contentful_id'
  | 'person___blog_post___heroImage___title'
  | 'person___blog_post___heroImage___description'
  | 'person___blog_post___heroImage___node_locale'
  | 'person___blog_post___author___id'
  | 'person___blog_post___author___children'
  | 'person___blog_post___author___name'
  | 'person___blog_post___author___birthday'
  | 'person___blog_post___author___jobHistory'
  | 'person___blog_post___author___skill'
  | 'person___blog_post___author___spaceId'
  | 'person___blog_post___author___contentful_id'
  | 'person___blog_post___author___createdAt'
  | 'person___blog_post___author___updatedAt'
  | 'person___blog_post___author___node_locale'
  | 'person___blog_post___author___github'
  | 'person___blog_post___author___blog_post'
  | 'person___blog_post___description___id'
  | 'person___blog_post___description___children'
  | 'person___blog_post___description___description'
  | 'person___blog_post___body___id'
  | 'person___blog_post___body___children'
  | 'person___blog_post___body___body'
  | 'person___blog_post___spaceId'
  | 'person___blog_post___contentful_id'
  | 'person___blog_post___createdAt'
  | 'person___blog_post___updatedAt'
  | 'person___blog_post___sys___revision'
  | 'person___blog_post___node_locale'
  | 'person___blog_post___childContentfulBlogPostDescriptionTextNode___id'
  | 'person___blog_post___childContentfulBlogPostDescriptionTextNode___children'
  | 'person___blog_post___childContentfulBlogPostDescriptionTextNode___description'
  | 'person___blog_post___childContentfulBlogPostBodyTextNode___id'
  | 'person___blog_post___childContentfulBlogPostBodyTextNode___children'
  | 'person___blog_post___childContentfulBlogPostBodyTextNode___body'
  | 'person___childContentfulPersonShortBioTextNode___id'
  | 'person___childContentfulPersonShortBioTextNode___parent___id'
  | 'person___childContentfulPersonShortBioTextNode___parent___children'
  | 'person___childContentfulPersonShortBioTextNode___children'
  | 'person___childContentfulPersonShortBioTextNode___children___id'
  | 'person___childContentfulPersonShortBioTextNode___children___children'
  | 'person___childContentfulPersonShortBioTextNode___internal___content'
  | 'person___childContentfulPersonShortBioTextNode___internal___contentDigest'
  | 'person___childContentfulPersonShortBioTextNode___internal___description'
  | 'person___childContentfulPersonShortBioTextNode___internal___fieldOwners'
  | 'person___childContentfulPersonShortBioTextNode___internal___ignoreType'
  | 'person___childContentfulPersonShortBioTextNode___internal___mediaType'
  | 'person___childContentfulPersonShortBioTextNode___internal___owner'
  | 'person___childContentfulPersonShortBioTextNode___internal___type'
  | 'person___childContentfulPersonShortBioTextNode___shortBio'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'post'
  | 'post___id'
  | 'post___parent___id'
  | 'post___parent___parent___id'
  | 'post___parent___parent___children'
  | 'post___parent___children'
  | 'post___parent___children___id'
  | 'post___parent___children___children'
  | 'post___parent___internal___content'
  | 'post___parent___internal___contentDigest'
  | 'post___parent___internal___description'
  | 'post___parent___internal___fieldOwners'
  | 'post___parent___internal___ignoreType'
  | 'post___parent___internal___mediaType'
  | 'post___parent___internal___owner'
  | 'post___parent___internal___type'
  | 'post___children'
  | 'post___children___id'
  | 'post___children___parent___id'
  | 'post___children___parent___children'
  | 'post___children___children'
  | 'post___children___children___id'
  | 'post___children___children___children'
  | 'post___children___internal___content'
  | 'post___children___internal___contentDigest'
  | 'post___children___internal___description'
  | 'post___children___internal___fieldOwners'
  | 'post___children___internal___ignoreType'
  | 'post___children___internal___mediaType'
  | 'post___children___internal___owner'
  | 'post___children___internal___type'
  | 'post___internal___content'
  | 'post___internal___contentDigest'
  | 'post___internal___description'
  | 'post___internal___fieldOwners'
  | 'post___internal___ignoreType'
  | 'post___internal___mediaType'
  | 'post___internal___owner'
  | 'post___internal___type'
  | 'post___title'
  | 'post___features'
  | 'post___isJob'
  | 'post___video'
  | 'post___links'
  | 'post___isPined'
  | 'post___skills'
  | 'post___skills___id'
  | 'post___skills___parent___id'
  | 'post___skills___parent___children'
  | 'post___skills___children'
  | 'post___skills___children___id'
  | 'post___skills___children___children'
  | 'post___skills___internal___content'
  | 'post___skills___internal___contentDigest'
  | 'post___skills___internal___description'
  | 'post___skills___internal___fieldOwners'
  | 'post___skills___internal___ignoreType'
  | 'post___skills___internal___mediaType'
  | 'post___skills___internal___owner'
  | 'post___skills___internal___type'
  | 'post___skills___name'
  | 'post___skills___onlyHobby'
  | 'post___skills___key'
  | 'post___skills___person'
  | 'post___skills___person___id'
  | 'post___skills___person___children'
  | 'post___skills___person___name'
  | 'post___skills___person___birthday'
  | 'post___skills___person___jobHistory'
  | 'post___skills___person___skill'
  | 'post___skills___person___spaceId'
  | 'post___skills___person___contentful_id'
  | 'post___skills___person___createdAt'
  | 'post___skills___person___updatedAt'
  | 'post___skills___person___node_locale'
  | 'post___skills___person___github'
  | 'post___skills___person___blog_post'
  | 'post___skills___spaceId'
  | 'post___skills___contentful_id'
  | 'post___skills___createdAt'
  | 'post___skills___updatedAt'
  | 'post___skills___sys___revision'
  | 'post___skills___node_locale'
  | 'post___skills___post'
  | 'post___skills___post___id'
  | 'post___skills___post___children'
  | 'post___skills___post___title'
  | 'post___skills___post___features'
  | 'post___skills___post___isJob'
  | 'post___skills___post___video'
  | 'post___skills___post___links'
  | 'post___skills___post___isPined'
  | 'post___skills___post___skills'
  | 'post___skills___post___spaceId'
  | 'post___skills___post___contentful_id'
  | 'post___skills___post___createdAt'
  | 'post___skills___post___updatedAt'
  | 'post___skills___post___node_locale'
  | 'post___description___id'
  | 'post___description___parent___id'
  | 'post___description___parent___children'
  | 'post___description___children'
  | 'post___description___children___id'
  | 'post___description___children___children'
  | 'post___description___internal___content'
  | 'post___description___internal___contentDigest'
  | 'post___description___internal___description'
  | 'post___description___internal___fieldOwners'
  | 'post___description___internal___ignoreType'
  | 'post___description___internal___mediaType'
  | 'post___description___internal___owner'
  | 'post___description___internal___type'
  | 'post___description___content'
  | 'post___description___content___content'
  | 'post___description___content___nodeType'
  | 'post___description___nodeType'
  | 'post___description___description'
  | 'post___description___json'
  | 'post___description___childContentfulRichText___id'
  | 'post___description___childContentfulRichText___children'
  | 'post___description___childContentfulRichText___html'
  | 'post___description___childContentfulRichText___timeToRead'
  | 'post___spaceId'
  | 'post___contentful_id'
  | 'post___createdAt'
  | 'post___updatedAt'
  | 'post___sys___revision'
  | 'post___node_locale'
  | 'post___fields___parsedLinks'
  | 'post___fields___parsedLinks___link'
  | 'post___fields___parsedLinks___value'
  | 'post___img___id'
  | 'post___img___parent___id'
  | 'post___img___parent___children'
  | 'post___img___children'
  | 'post___img___children___id'
  | 'post___img___children___children'
  | 'post___img___internal___content'
  | 'post___img___internal___contentDigest'
  | 'post___img___internal___description'
  | 'post___img___internal___fieldOwners'
  | 'post___img___internal___ignoreType'
  | 'post___img___internal___mediaType'
  | 'post___img___internal___owner'
  | 'post___img___internal___type'
  | 'post___img___contentful_id'
  | 'post___img___file___url'
  | 'post___img___file___fileName'
  | 'post___img___file___contentType'
  | 'post___img___title'
  | 'post___img___description'
  | 'post___img___node_locale'
  | 'post___img___fixed___base64'
  | 'post___img___fixed___tracedSVG'
  | 'post___img___fixed___aspectRatio'
  | 'post___img___fixed___width'
  | 'post___img___fixed___height'
  | 'post___img___fixed___src'
  | 'post___img___fixed___srcSet'
  | 'post___img___fixed___srcWebp'
  | 'post___img___fixed___srcSetWebp'
  | 'post___img___resolutions___base64'
  | 'post___img___resolutions___tracedSVG'
  | 'post___img___resolutions___aspectRatio'
  | 'post___img___resolutions___width'
  | 'post___img___resolutions___height'
  | 'post___img___resolutions___src'
  | 'post___img___resolutions___srcSet'
  | 'post___img___resolutions___srcWebp'
  | 'post___img___resolutions___srcSetWebp'
  | 'post___img___fluid___base64'
  | 'post___img___fluid___tracedSVG'
  | 'post___img___fluid___aspectRatio'
  | 'post___img___fluid___src'
  | 'post___img___fluid___srcSet'
  | 'post___img___fluid___srcWebp'
  | 'post___img___fluid___srcSetWebp'
  | 'post___img___fluid___sizes'
  | 'post___img___sizes___base64'
  | 'post___img___sizes___tracedSVG'
  | 'post___img___sizes___aspectRatio'
  | 'post___img___sizes___src'
  | 'post___img___sizes___srcSet'
  | 'post___img___sizes___srcWebp'
  | 'post___img___sizes___srcSetWebp'
  | 'post___img___sizes___sizes'
  | 'post___img___resize___base64'
  | 'post___img___resize___tracedSVG'
  | 'post___img___resize___src'
  | 'post___img___resize___width'
  | 'post___img___resize___height'
  | 'post___img___resize___aspectRatio'
  | 'post___childContentfulPostDescriptionRichTextNode___id'
  | 'post___childContentfulPostDescriptionRichTextNode___parent___id'
  | 'post___childContentfulPostDescriptionRichTextNode___parent___children'
  | 'post___childContentfulPostDescriptionRichTextNode___children'
  | 'post___childContentfulPostDescriptionRichTextNode___children___id'
  | 'post___childContentfulPostDescriptionRichTextNode___children___children'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___content'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___contentDigest'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___description'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___fieldOwners'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___ignoreType'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___mediaType'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___owner'
  | 'post___childContentfulPostDescriptionRichTextNode___internal___type'
  | 'post___childContentfulPostDescriptionRichTextNode___content'
  | 'post___childContentfulPostDescriptionRichTextNode___content___content'
  | 'post___childContentfulPostDescriptionRichTextNode___content___nodeType'
  | 'post___childContentfulPostDescriptionRichTextNode___nodeType'
  | 'post___childContentfulPostDescriptionRichTextNode___description'
  | 'post___childContentfulPostDescriptionRichTextNode___json'
  | 'post___childContentfulPostDescriptionRichTextNode___childContentfulRichText___id'
  | 'post___childContentfulPostDescriptionRichTextNode___childContentfulRichText___children'
  | 'post___childContentfulPostDescriptionRichTextNode___childContentfulRichText___html'
  | 'post___childContentfulPostDescriptionRichTextNode___childContentfulRichText___timeToRead';

export type ContentfulSkillFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  onlyHobby?: Maybe<BooleanQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  person?: Maybe<ContentfulPersonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
};

export type ContentfulSkillFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillFilterInput>;
};

export type ContentfulSkillGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSkillEdge>;
  nodes: Array<ContentfulSkill>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSkillSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSkillSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSkillSysContentType>;
};

export type ContentfulSkillSysContentType = {
  sys?: Maybe<ContentfulSkillSysContentTypeSys>;
};

export type ContentfulSkillSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillSysContentTypeSysFilterInput>;
};

export type ContentfulSkillSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSkillSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSkillSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSkillSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulSkill?: Maybe<ContentfulSkill>;
  allContentfulSkill: ContentfulSkillConnection;
  contentfulRichText?: Maybe<ContentfulRichText>;
  allContentfulRichText: ContentfulRichTextConnection;
  contentfulPostDescriptionRichTextNode?: Maybe<ContentfulPostDescriptionRichTextNode>;
  allContentfulPostDescriptionRichTextNode: ContentfulPostDescriptionRichTextNodeConnection;
  contentfulPost?: Maybe<ContentfulPost>;
  allContentfulPost: ContentfulPostConnection;
  contentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
  allContentfulBlogPostBodyTextNode: ContentfulBlogPostBodyTextNodeConnection;
  contentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  allContentfulBlogPostDescriptionTextNode: ContentfulBlogPostDescriptionTextNodeConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNode>;
  allContentfulPersonShortBioTextNode: ContentfulPersonShortBioTextNodeConnection;
  contentfulPerson?: Maybe<ContentfulPerson>;
  allContentfulPerson: ContentfulPersonConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSkillArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  onlyHobby?: Maybe<BooleanQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  person?: Maybe<ContentfulPersonFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSkillSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
};


export type QueryAllContentfulSkillArgs = {
  filter?: Maybe<ContentfulSkillFilterInput>;
  sort?: Maybe<ContentfulSkillSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulRichTextArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllContentfulRichTextArgs = {
  filter?: Maybe<ContentfulRichTextFilterInput>;
  sort?: Maybe<ContentfulRichTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostDescriptionRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulPostDescriptionRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
  childContentfulRichText?: Maybe<ContentfulRichTextFilterInput>;
};


export type QueryAllContentfulPostDescriptionRichTextNodeArgs = {
  filter?: Maybe<ContentfulPostDescriptionRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulPostDescriptionRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  features?: Maybe<StringQueryOperatorInput>;
  isJob?: Maybe<BooleanQueryOperatorInput>;
  video?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<StringQueryOperatorInput>;
  isPined?: Maybe<BooleanQueryOperatorInput>;
  skills?: Maybe<ContentfulSkillFilterListInput>;
  description?: Maybe<ContentfulPostDescriptionRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContentfulPostFieldsFilterInput>;
  img?: Maybe<ContentfulAssetFilterInput>;
  childContentfulPostDescriptionRichTextNode?: Maybe<ContentfulPostDescriptionRichTextNodeFilterInput>;
};


export type QueryAllContentfulPostArgs = {
  filter?: Maybe<ContentfulPostFilterInput>;
  sort?: Maybe<ContentfulPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlogPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlogPostDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ContentfulAssetFilterInput>;
  author?: Maybe<ContentfulPersonFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonShortBioTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  shortBio?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPersonShortBioTextNodeArgs = {
  filter?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  sort?: Maybe<ContentfulPersonShortBioTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPersonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  birthday?: Maybe<StringQueryOperatorInput>;
  jobHistory?: Maybe<StringQueryOperatorInput>;
  skill?: Maybe<ContentfulSkillFilterListInput>;
  shortBio?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPersonSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  childContentfulPersonShortBioTextNode?: Maybe<ContentfulPersonShortBioTextNodeFilterInput>;
};


export type QueryAllContentfulPersonArgs = {
  filter?: Maybe<ContentfulPersonFilterInput>;
  sort?: Maybe<ContentfulPersonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___keywords'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___fileName'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type SiteMetaDataQueryVariables = {};


export type SiteMetaDataQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'keywords' | 'siteUrl'>> }> };

export type PostFragment = (
  Pick<ContentfulPost, 'id' | 'title' | 'features' | 'video' | 'links'>
  & { description?: Maybe<{ childContentfulRichText?: Maybe<Pick<ContentfulRichText, 'html'>> }>, skills?: Maybe<Array<Maybe<SkillFragment>>>, img?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluidFragment> }>, fields?: Maybe<{ parsedLinks?: Maybe<Array<Maybe<Pick<ContentfulPostFieldsParsedLinks, 'link' | 'value'>>>> }> }
);

export type SkillFragment = Pick<ContentfulSkill, 'id' | 'name' | 'key'>;

export type IndexQueryVariables = {};


export type IndexQuery = { contentfulPerson?: Maybe<(
    Pick<ContentfulPerson, 'name' | 'github' | 'birthday' | 'jobHistory'>
    & { shortBio?: Maybe<Pick<ContentfulPersonShortBioTextNode, 'shortBio'>> }
  )>, skillHobby: { nodes: Array<SkillFragment> }, skillJob: { nodes: Array<SkillFragment> }, hobby: { nodes: Array<PostFragment> }, job: { nodes: Array<PostFragment> } };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
