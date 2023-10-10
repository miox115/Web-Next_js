// typesは後ほど定義
import { ApiContext, User } from 'types'
// 先ほど定義したsrc/utils/index.tsから読み込み
import { fetcher } from 'utils'

export type SigninParams = {
    /**
     *ユーザー名
     *サンプルユーザーのユーザー名は"user"
     */
    username: string
    /**
     * パスワード
     * サンプルユーザーのパスワードは”password”
     */
}

/**
 * 認証API(サインイン)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async(
    context: apiContext,
    params: SigninParams,
): Promise<User> => {
 return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: JSON.stringify(params),
    },
 )   
}

export default signin