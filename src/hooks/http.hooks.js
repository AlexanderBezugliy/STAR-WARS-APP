import { useCallback } from "react";


const useHttp = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-type': 'application/json' }) => {
        try {
            //                         сам url, {обьект с  настройками}  
            const response = await fetch(url, { method, body, headers });
            //добавляем проверку:
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status ${response.status}`);
            }

            // получаем ответ зная что это прийдет ПРОМИС
            const data = await response.json();

            return data;//если все впорядке то наш метод request вернет данные c сервера(data)
        } catch (e) {
            throw e;
        }
    }, [])


    return {
        request
    }
}

export default useHttp;
