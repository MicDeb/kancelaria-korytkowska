const API_URL = process.env.WORDPRESS_API_URL;

interface IJSONResponse<DataResponse> {
  data?: DataResponse;
  errors?: Array<{ message: string }>;
}

export async function fetchAPI<DataResponse>(query = '', { variables }: Record<string, string | object> = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (API_URL) {
    const res = await fetch(API_URL, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      })
    });

    const { data, errors } = (await res.json()) as IJSONResponse<DataResponse>;

    if (res.ok) {
      return data;
    } else {
      // handle the graphql errors
      const error = new Error(errors?.map((e) => e.message).join('\n') ?? 'unknown');
      return Promise.reject(error);
    }
  }

  throw new Error('Failed to fetch API. No API_URL variable');
}
