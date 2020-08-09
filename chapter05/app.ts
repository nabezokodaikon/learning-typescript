/// <reference lib="dom" />

{
  const a = document.getElementById('content');
  console.log(a);

  const b = document.querySelector('#content');
  console.log(b);

  const c = <HTMLDivElement>document.querySelector('#content');
  console.log(c);
}

{
  const elements = document.getElementsByTagName('div');
  console.log(elements);

  console.log(elements[0]);
}

{
  const elements = document.querySelectorAll('#content');
  const a = elements[0];
  console.log(a);
  const b = <HTMLDivElement>elements[0]
  console.log(b);
}

{
  const element = <HTMLDivElement>document.querySelector('#content');
  element.innerHTML = '<span>Hello World</span>';
}

{
  const element = <HTMLDivElement> document.querySelector('#content');

  const newElement1 = document.createElement('div');
  newElement1.textContent = 'Hello World';
  element.appendChild(newElement1);

  const newElement2 = document.createElement('div');
  newElement2.textContent = 'Greetings Earth';
  element.appendChild(newElement2);
}

{
  const newElement2 = document.createElement('div');
  newElement2.textContent = 'Greetings Earth';

  const element = <HTMLDivElement> document.querySelector('#content');
  element.insertBefore(newElement2, element.firstChild);
}

class Ajax {
  private READY_STATUS_CODE = 4;

  private isCompleted (request: XMLHttpRequest) {
    return request.readyState === this.READY_STATUS_CODE;
  }

  httpGet(url: string, callback: (status: number, response: string) => any) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      const completed = this.isCompleted(request);
      if (completed) {
        callback(request.status, request.responseText);
      }
    };

    request.withCredentials = true;
    request.open('GET', url, true);
    request.send();
  }

  httpPost(url: string, _data: string,
           callback: (status: number, response: string) => any) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      const completed = this.isCompleted(request);
      if (completed) {
        callback(request.status, request.responseText);
      }
    };

    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send();
  }

}

class StorageTest {

  sessionStorage() {
    const storageKey = 'Example';
    console.log(sessionStorage.getItem(storageKey));
    sessionStorage.setItem(storageKey, 'Srored value');
    console.log(sessionStorage.getItem(storageKey));
    // sessionStorage.removeItem(storageKey);
    // sessionStorage.clear();
  }

}

{
  document.getElementById('getButton')!.addEventListener('click', _ev => {
    const ajax = new Ajax();
    ajax.httpGet('tsconfig.json', (status, _response) => {
      console.log(`status: ${status}`);
      document.getElementById('content')!.innerHTML = _response;
    });
  });

  document.getElementById('postButton')!.addEventListener('click', _ev => {
    const ajax = new Ajax();
    ajax.httpPost('http://localhost:4507/', 'postdata', (status, _response) => {
      console.log(`status: ${status}`);
    });
  });

  document.getElementById('sessionStorageButton')!.addEventListener('click', _ev => {
    const storage = new StorageTest();
    storage.sessionStorage();
  });
}
