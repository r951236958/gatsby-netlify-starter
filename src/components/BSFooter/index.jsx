import React from "react"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styles from "./BSFooter.module.scss"
import { Button } from "@react-md/button"
import { FontIcon } from "@react-md/icon"
import { Link } from "@react-md/link"
import { List, ListItem } from "@react-md/list"
import { TextField, Fieldset } from "@react-md/form"
import { Text } from "@react-md/typography"

const BSFooter = () => {
  return (
    <footer className={styles.footer}>
      <Row>
        <Col xs={12} md={3} className={styles.brand}>
          <div className="animated fadeInLeft">
            <h2>Logo</h2>
            <p>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor vitae orci nec ultricies. Curabitur vehicula, libero
              eget faucibus faucibus, purus erat eleifend enim, porta
              pellentesque ex mi ut sem.
            </p>
            <p>© 2014 BS3 UI Kit, All rights reserved</p>
          </div>
        </Col>
        <Col md={3} className={styles.nav}>
          <div className="animated fadeInUp">
            <h4>Menu —</h4>
            <Row>
              <Col>
                <List>
                  <ListItem>
                    <Link href="#">Travel</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Nature</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Explores</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Science</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Advice</Link>
                  </ListItem>
                </List>
              </Col>
              <Col>
                <List>
                  <ListItem>
                    <Link href="#">About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Contacts</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Terms &amp; Condition</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Privacy Policy</Link>
                  </ListItem>
                </List>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={3} className={styles.social}>
          <div className="animated fadeInDown">
            <h4>Follow Us</h4>
            <ul>
              <ListItem>
                <Link href="#">Facebook</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Twitter</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Instagram</Link>
              </ListItem>
              <ListItem>
                <Link href="#">RSS</Link>
              </ListItem>
            </ul>
          </div>
        </Col>
        <Col className={styles.ns}>
          <Fieldset legend="Newsletter">
            <Text type="body-1">
              A rover wearing a fuzzy suit doesn’t alarm the real penguins
            </Text>
            <Row className={styles.inputGroup}>
              <Col md={10} xs={8}>
                <TextField
                  theme="filled"
                  className="form-control"
                  placeholder="Search for..."
                />
              </Col>
              <Col md={2} xs={2}>
                <Button buttonType="icon" tabIndex={0}>
                  <FontIcon>mail</FontIcon>
                </Button>
              </Col>
            </Row>
          </Fieldset>
        </Col>
      </Row>
    </footer>
  )
}

export default BSFooter
