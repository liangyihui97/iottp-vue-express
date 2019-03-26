var graph = new Q.Graph('canvas');

                var node1 = graph.createNode("灯光", -300, -200);
                node1.image = "http://192.168.227.10:4000/images/node5.png";
		node1.size = {width: 70};
                var node2 = graph.createNode("智能开关", -200, 0);
                node2.image = "http://192.168.227.10:4000/images/node3.png";
		node2.size = {width: 50};
		var node3 = graph.createNode("门磁传感器", -200, -100);
		node3.image = "http://192.168.227.10:4000/images/node1.png";
		node3.size = {width: 50};
		var node4 = graph.createNode("ZigBee智能网关", -50, -50);
		node4.image = "http://192.168.227.10:4000/images/node2.png";
		node4.size = {width: 50};
		var node5 = graph.createNode("中央控制器", 150, -50);
		node5.image = "http://192.168.227.10:4000/images/node4.png";
		node5.size = {width: 70};
                var edge = graph.createEdge("", node1, node2);
                /*虚线样式*/
                edge.setStyle(Q.Styles.EDGE_COLOR, '#88AAEE');
		edge.setStyle(Q.Styles.EDGE_WIDTH, 2);
		edge.edgeType = Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL;

                /*连线文字样式*/
                edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
                edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
                edge.setStyle(Q.Styles.LABEL_BORDER, 1);
                edge.setStyle(Q.Styles.LABEL_POINTER, true);
                edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
                edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT,
                Q.Gradient.LINEAR_GRADIENT_VERTICAL);

		var edge = graph.createEdge("ZigBee", node2, node4);
                /*虚线样式*/
                edge.edgeType = Q.Consts.EDGE_TYPE_ELBOW;
                edge.setStyle(Q.Styles.EDGE_LINE_DASH, [8, 4, 0.01, 4]);
                edge.setStyle(Q.Styles.LINE_CAP, "round");
                edge.setStyle(Q.Styles.LABEL_OFFSET_Y, -10);
                /*连线文字样式*/
                edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
                edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
                edge.setStyle(Q.Styles.LABEL_BORDER, 1);
                edge.setStyle(Q.Styles.LABEL_POINTER, true);
                edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
                edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT,
                Q.Gradient.LINEAR_GRADIENT_VERTICAL);

		var edge = graph.createEdge(node3, node4);
                /*虚线样式*/
                edge.edgeType = Q.Consts.EDGE_TYPE_ELBOW;
                edge.setStyle(Q.Styles.EDGE_LINE_DASH, [8, 4, 0.01, 4]);
                edge.setStyle(Q.Styles.LINE_CAP, "round");
                edge.setStyle(Q.Styles.LABEL_OFFSET_Y, -10);
                /*连线文字样式*/
                edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
                edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
                edge.setStyle(Q.Styles.LABEL_BORDER, 1);
                edge.setStyle(Q.Styles.LABEL_POINTER, true);
                edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
                edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT,
                Q.Gradient.LINEAR_GRADIENT_VERTICAL);

		var edge = graph.createEdge("TCP/IP", node4, node5);
		/*实线样式*/
                edge.setStyle(Q.Styles.EDGE_COLOR, '#88AAEE');
		edge.setStyle(Q.Styles.EDGE_WIDTH, 2);
		edge.edgeType = Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL;

		edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
                edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
                edge.setStyle(Q.Styles.LABEL_BORDER, 1);
                edge.setStyle(Q.Styles.LABEL_POINTER, true);
                edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
                edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT,
                Q.Gradient.LINEAR_GRADIENT_VERTICAL);
                /*双击改名*/
                graph.ondblclick = function(evt){
                    var node = graph.getElementByMouseEvent(evt);
                    if(node){
                        var newName = prompt("New Name:");
                        if(newName){
                            node.name = newName;
                        }
                    }
                }
