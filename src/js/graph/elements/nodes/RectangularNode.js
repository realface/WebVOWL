webvowl.nodes.RectangularNode = (function () {

	var o = function () {
		webvowl.nodes.BaseNode.call(this);

		var that = this,
			height = 20,
			width = 60;


		// Properties
		this.height = function (p) {
			if (!arguments.length) return height;
			height = p;
			return this;
		};

		this.width = function (p) {
			if (!arguments.length) return width;
			width = p;
			return this;
		};


		// Functions
		// for compatibility reasons // TODO resolve
		this.radius = function () {
			return width;
		};

		this.textWidth = function () {
			return this.width();
		};

		this.toggleFocus = function () {
			that.focused(!that.focused());
			that.nodeElement().select("rect").classed("focused", that.focused());
		};

		/**
		 * Draws the rectangular node.
		 * @param parentElement the element to which this node will be appended
		 * @param cssClasses additional css classes
		 */
		this.drawNode = function (parentElement, cssClasses) {
			var drawTools = webvowl.nodes.drawTools(),
				textBlock;

			that.nodeElement(parentElement);

			drawTools.appendRectangularClass(parentElement, that.width(), that.height(),
				that.styleClass(), cssClasses);

			textBlock = webvowl.util.textElement(parentElement);
			textBlock.addTextline(that.label(), null);

			that.addMouseListeners();
		};
	};
	o.prototype = Object.create(webvowl.nodes.BaseNode.prototype);
	o.prototype.constructor = o;

	return o;
}());