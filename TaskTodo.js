import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  RadioGroup,
  Stack,
  Radio,
  FormControl,
  Switch,
  Text,
} from "@chakra-ui/react";

const TaskTodo = () => {
  const [value, setValue] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${value}`)
      .then((result) => {
        setData(result.data);
      });
  }, [value]);
  const handle = (key) => {
    setValue(key);
  };
  //   console.log("rabia", setData);
  //   userId tittle boday

  return (
    <>
      <Stack p={"3"} mt={"4"} direction={"row"}>
        <Stack width={"30%"}>
          <TableContainer border={"1px solid #E2E8F0"} borderRadius={"20px"}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Data</Th>
                  <Th>Button</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>posts</Td>
                  <Td>
                    <FormControl display="flex" alignItems="center">
                      <Switch
                        isChecked={value === "posts"}
                        onChange={() => handle("posts")}
                      />
                    </FormControl>
                  </Td>
                </Tr>
                <Tr>
                  <Td>comments</Td>
                  <Td>
                    <FormControl display="flex" alignItems="center">
                      <Switch
                        isChecked={value === "comments"}
                        onChange={() => handle("comments")}
                      />
                    </FormControl>
                  </Td>
                </Tr>
                <Tr>
                  <Td>albums</Td>
                  <Td>
                    <FormControl display="flex" alignItems="center">
                      <Switch
                        isChecked={value === "albums"}
                        onChange={() => handle("albums")}
                      />
                    </FormControl>
                  </Td>
                </Tr>
                <Tr>
                  <Td>photos</Td>
                  <Td>
                    <FormControl display="flex" alignItems="center">
                      <Switch
                        isChecked={value === "photos"}
                        onChange={() => handle("photos")}
                      />
                    </FormControl>
                  </Td>
                </Tr>
                <Tr>
                  <Td>todo</Td>
                  <Td>
                    <FormControl display="flex" alignItems="center">
                      <Switch
                        isChecked={value === "todo"}
                        onChange={() => handle("todos")}
                      />
                    </FormControl>
                  </Td>
                </Tr>
                <Tr>
                  <Td>users</Td>
                  <Td>
                    <FormControl display="flex" alignItems="center">
                      <Switch
                        isChecked={value === "users"}
                        onChange={() => handle("users")}
                      />
                    </FormControl>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack width={"70%"}>
          {value === "posts" ? (
            <>
              {data.map((todo) => (
                <>
                  <TableContainer>
                    <Table variant="simple">
                      {/* <Thead>
                                <Tr>
                                  <Th>User Id</Th>
                                  <Th>id</Th>
                                  <Th>tittle</Th>
                                  <Th>body</Th>
                                </Tr>
                              </Thead> */}
                      <Tbody>
                        <Tr>
                          <Td>{todo.userId}</Td>
                          <Td>{todo.id}</Td>
                          <Td>{todo.title}</Td>
                          <Td>{todo.body}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </>
              ))}
            </>
          ) : null}
          {value === "comments" ? (
            <>
              {data.map((todo) => (
                <>
                  <TableContainer>
                    <Table variant="simple">
                      {/* <Thead>
                                <Tr>
                                  <Th>User Id</Th>
                                  <Th>id</Th>
                                  <Th>tittle</Th>
                                  <Th>body</Th>
                                </Tr>
                              </Thead> */}
                      <Tbody>
                        <Tr>
                          <Td>{todo.postId}</Td>
                          <Td>{todo.name}</Td>
                          <Td>{todo.id}</Td>
                          <Td>{todo.email}</Td>
                          <Td>{todo.body}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </>
              ))}
            </>
          ) : null}
          {value === "albums" ? (
            <>
              {data.map((todo) => (
                <TableContainer>
                  <Table variant="simple">
                    {/* <Thead>
                                <Tr>
                                  <Th>User Id</Th>
                                  <Th>id</Th>
                                  <Th>tittle</Th>
                                  <Th>body</Th>
                                </Tr>
                              </Thead> */}
                    <Tbody>
                      <Tr>
                        <Td>{todo.userId}</Td>

                        <Td>{todo.id}</Td>
                        <Td>{todo.title}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              ))}
            </>
          ) : null}
          {value === "photos" ? (
            <>
              {data.map((todo) => (
                <TableContainer>
                  <Table variant="simple">
                    {/* <Thead>
                                <Tr>
                                  <Th>User Id</Th>
                                  <Th>id</Th>
                                  <Th>tittle</Th>
                                  <Th>body</Th>
                                </Tr>
                              </Thead> */}
                    <Tbody>
                      <Tr>
                        <Td>{todo.albumId}</Td>

                        <Td>{todo.id}</Td>
                        <Td>{todo.title}</Td>
                        <Td>{todo.url}</Td>
                        <Td>{todo.thumbnailUrl}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              ))}
            </>
          ) : null}
          {value === "todos" ? (
            <>
              {data.map((todo) => (
                <TableContainer>
                  <Table variant="simple">
                    {/* <Thead>
                                <Tr>
                                  <Th>User Id</Th>
                                  <Th>id</Th>
                                  <Th>tittle</Th>
                                  <Th>body</Th>
                                </Tr>
                              </Thead> */}
                    <Tbody>
                      <Tr>
                        <Td>{todo.userId}</Td>

                        <Td>{todo.id}</Td>
                        <Td>{todo.title}</Td>
                        <Td>{todo.completed}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              ))}
            </>
          ) : null}
          {value === "users" ? (
            <>
              {data.map((todo) => (
                <TableContainer>
                  <Table variant="simple">
                    {/* <Thead>
                                <Tr>
                                  <Th>User Id</Th>
                                  <Th>id</Th>
                                  <Th>tittle</Th>
                                  <Th>body</Th>
                                </Tr>
                              </Thead> */}
                    <Tbody>
                      <Tr>
                        <Td>{todo.id}</Td>
                        <Td>{todo.name}</Td>

                        <Td>{todo.username}</Td>
                        <Td>{todo.email}</Td>
                        <Td>{todo.addres}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              ))}
            </>
          ) : null}
        </Stack>
      </Stack>
    </>
  );
};

export default TaskTodo;
