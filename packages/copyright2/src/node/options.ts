import type { LocaleConfig, Page } from "@vuepress/core";

import type { CopyrightLocaleData } from "../shared/locales.js";

export interface CopyrightOptions {
  /**
   * Author Information
   *
   * 作者信息
   */
  author?:
    | string
    | (<
        ExtraPageData extends Record<
          string | number | symbol,
          unknown
        > = Record<never, never>,
        ExtraPageFrontmatter extends Record<
          string | number | symbol,
          unknown
        > = Record<string, unknown>,
        ExtraPageFields extends Record<
          string | number | symbol,
          unknown
        > = Record<never, never>
      >(
        page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>
      ) => string);

  /**
   * License Information
   *
   * 协议信息
   */
  license?:
    | string
    | (<
        ExtraPageData extends Record<
          string | number | symbol,
          unknown
        > = Record<never, never>,
        ExtraPageFrontmatter extends Record<
          string | number | symbol,
          unknown
        > = Record<string, unknown>,
        ExtraPageFields extends Record<
          string | number | symbol,
          unknown
        > = Record<never, never>
      >(
        page: Page<ExtraPageData, ExtraPageFrontmatter, ExtraPageFields>
      ) => string);

  /**
   * Min words triggering copyright append
   *
   * 触发附加版权的最小字数
   *
   * @default 100
   */
  triggerWords?: number;

  /**
   * Whether enabled globally
   *
   * 是否全局启用
   *
   * @default false
   */
  global?: boolean;

  /**
   * Disable copy
   *
   * 禁用复制
   *
   * @default false
   */
  disableCopy?: boolean;

  /**
   * Disable selection
   *
   * 禁用选择
   *
   * @default false
   */
  disableSelection?: boolean;

  /**
   * Locales config for copyright
   *
   * 复制版权的多语言配置
   */
  locales?: LocaleConfig<CopyrightLocaleData>;

  /**
   * Canonical hostname with base
   *
   * @description This is useful when your content are deployed in multiple places
   *
   * 首选域名与部署目录
   *
   * @description 当你在多个站点部署内容时很有用。
   */
  canonical?: string;
}
