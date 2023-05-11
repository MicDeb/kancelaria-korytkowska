import { fetchAPI } from '@/lib/api';
import type { IAllSettings } from '@/types/allSettings';
import type { IMediaItem } from '@/types/mediaItem';
import type { IMainMenu, INode } from '@/types/menuItems';

const query = `
  query getGeneralSettings {
    allSettings {
      generalSettingsTitle
    }
    menu(id: "main-menu", idType: SLUG) {
      locations
      menuItems {
        nodes {
          url
          order
          label
          uri
          id
        }
      }
      id  
    }
    mediaItem(id: "logo", idType: SLUG) {
      id
      uri
      title
      sourceUrl
    }
  }
`;

const setNodeUri = (node: INode) => {
  const uri = node.uri.split('/').filter((el) => el);
  return uri[uri.length - 1];
};

const getNodes = (nodes: INode[] | undefined) => {
  if (nodes) {
    return nodes.map((node) => ({
      ...node,
      uri: setNodeUri(node) || ''
    }));
  }
  return [];
};

export async function getGeneralSettings() {
  const data = await fetchAPI<IMainMenu & IMediaItem & IAllSettings>(query);
  return {
    ...data?.menu,
    menuItems: {
      nodes: getNodes(data?.menu?.menuItems?.nodes)
    },
    logo: data?.mediaItem,
    allSettings: data?.allSettings
  };
}
